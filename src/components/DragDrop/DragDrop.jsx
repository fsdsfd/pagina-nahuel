import { useEffect, useState } from "react";
import { helperPeticionesHttp } from "../../helpers/helper-peticiones-http";
import "./DragDrop.scss";

const DragDrop = ({ setFoto, srcImagen, setSrcImagen }) => {
  // Cancelar comportamiento por defecto del navegador
  const arrayEventos = ["dragenter", "dragleave", "dragover", "drop"];
  arrayEventos.forEach((eventName) => {
    document.body.addEventListener(eventName, (e) => e.preventDefault());
  });
  const [imagenesSubidas, setImagenesSubidas] = useState([]);

  useEffect(() => {
    console.log("Imágenes subidas actualizadas:", imagenesSubidas);
  }, [imagenesSubidas]);

  const handleDrop = (e) => {
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleChange = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = async (files) => {
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => formData.append("foto", file));
  
      const urls = await uploadFile(formData);
  
      if (urls && urls.length > 0) {
        console.log("Nuevas URLs a guardar:", urls);
        
        setImagenesSubidas((prev) => [...prev, ...urls]); // Actualizar imágenes subidas
        setFoto((prev) => [...prev, ...urls]); // Guardarlas en el formulario
  
        console.log("Estado actualizado de imágenes:", imagenesSubidas);
      }
    } catch (error) {
      console.error("[handleFiles]:", error);
    }
  };

  const uploadFile = async (imagenes) => {
    try {
      const url = import.meta.env.VITE_URL_UPLOAD;
      const formData = new FormData();
  
      // Agregar imágenes antes de definir `options`
      imagenes.forEach((imagen) => {
        formData.append("foto", imagen); // Si el backend espera un array, puede ser "foto[]"
      });
  
      const options = {
        method: "POST",
        body: formData,
        // No es necesario `Content-Type`, fetch lo maneja
      };
  
      const response = await helperPeticionesHttp(url, options);
  
      console.log("Respuesta completa del backend:", response);
  
      if (response && response.archivos) {
        console.log("Archivos subidos:", response.archivos);
        console.log("Estructura de response.archivos:", response.archivos);

        return response.archivos // Retornar URLs de las imágenes
      } else {
        console.error("El backend no devolvió archivos.");
      }
    } catch (error) {
      console.error("[uploadFile]:", error);
    }
    return [];
  };
  return (
    <div className="drop-area" onDrop={handleDrop}>
      <p>
        Subir imagen al servidor con <b>File Dialog</b> o con
        <b> drag and drop </b> dentro del área punteada.
      </p>

      <input
        type="file"
        id="lbl-foto"
        multiple="multiple"
        accept="image/*"
        onChange={handleChange}
      />
      <label className="drop-area-button" htmlFor="lbl-foto">
        File Dialog
      </label>

      {/* Mostrar imágenes subidas */}
      {imagenesSubidas.length > 0 && (
  <div>
    <h4>Imágenes subidas:</h4>
    {imagenesSubidas.map((img, index) => {
      console.log("Mostrando imagen:", img);
      return <img key={index} src={img} alt={`Imagen ${index}`} width="100" />;
    })}
  </div>
)}
    </div>
  );
};

export default DragDrop