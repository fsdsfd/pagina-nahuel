import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

// ! CREANDO CONTEXTO
// ! 1. Creamos el contexto
const ProductosContext = createContext()
// ! 2. Armamos el provider
const ProductosProvider = ( { children} ) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {

        try {

            const prods = await helperPeticionesHttp(url, {})
            console.log('Productos recibidos:', prods);
            // console.log(prods)
            setProductos(prods)
            
        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const crearProductoContext = async (nuevoProducto) => {
        try {
            const options = {
                method: 'POST',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(nuevoProducto)
            }
            const newProducto = await helperPeticionesHttp(url, options);
            console.log("Producto creado:", newProducto);
            // Verifica que newProducto existe y tiene una propiedad identificadora, p.ej. id
            if (newProducto && newProducto.id) {
                setProductos([...productos, newProducto]);
            } else {
                console.error("El producto creado no tiene la estructura correcta:", newProducto);
            }
        } catch (error) {
            console.error('[crearProductoContext]', error);
        }
    }
    const actualizarProductoContext = async (productoEditado) => {
        // console.log(productoEditado)
        try {

            const options = {
                method: 'PUT',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(productoEditado)
            }

            const urlEdicion = url + productoEditado.id // http://local.../productos/9

            const editedProduct = await helperPeticionesHttp(urlEdicion, options)

            const nuevoEstadoProductos = productos.map( 
                producto => producto.id === editedProduct.id ? editedProduct : producto
            )
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }

    }
    const eliminarProducto = async (id)=>{
        try {
            const options = {
                method : 'DELETE'
            }
            const urlEliminar = url + id
            const prods = await helperPeticionesHttp(urlEliminar, options)
            const dataEliminar = {
                id : id,
                producto : prods
            }
            const nuevoEstadoProductos = productos.filter(prod => (prod.id !== dataEliminar.id))
            setProductos(nuevoEstadoProductos)    
        } catch (error) {
            console.log('eliminarProducto', error)
        }

    }


    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        productoAEditar,
        setProductoAEditar,
        eliminarProducto
    }

    return <ProductosContext.Provider value={data}>{ children }</ProductosContext.Provider>
}
// ! 3. Exportamos el contexto y provider

export { ProductosProvider }
export default ProductosContext