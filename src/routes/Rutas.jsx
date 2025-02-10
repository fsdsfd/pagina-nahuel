import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Alta from "../pages/Alta"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"
import Carrito from "../pages/Carrito"
import Cocinas from "../pages/Cocinas"
import Anafes from "../pages/Anafes"
import Freidoras from "../pages/Freidoras"
import Hornos from "../pages/Hornos"
import DetalleProductos from "../pages/DetalleProductos"
import Cuidado from "../pages/Cuidado"
import Terminos from "../pages/Terminos"
import Preguntas from "../pages/Preguntas"
import Garantia from "../pages/Garantia"

const Rutas = () => {

    const routes = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            }, 
            {
                path: '/alta',
                element: <Alta />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '/carrito',
                element: <Carrito />
            },
            {
                path: '/cocinas',
                element: <Cocinas />
            },
            {
                path: '/anafes',
                element: <Anafes />
            },
            {
                path: '/freidoras',
                element: <Freidoras />
            },
            {
                path: '/hornos',
                element: <Hornos />
            },
            {
                path: "/detalle-producto/:id",
                element: <DetalleProductos />,
              },
              {
                path: "/cuidado",
                element: <Cuidado />,
              },
              {
                path: "/garantia",
                element: <Garantia />,
              },
              {
                path: "/terminos",
                element: <Terminos />,
              },
              {
                path: "/q&a",
                element: <Preguntas />,
              },
            {
                path: '*',
                element: <NoEncontrado />
            }
        ]
    )

    return routes
}

export default Rutas