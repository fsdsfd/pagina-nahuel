import { useEffect } from "react"


const useTitulo = ( textoTitulo = 'Sin título') => {

    useEffect(() => {
      document.title = `Famigas - ${textoTitulo}`
    }, [])
    
}

export default useTitulo