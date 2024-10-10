import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Alta from "../pages/Alta"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import Noencontrado from "../pages/NoEncontrado"
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
                path: '*',
                element: <Noencontrado/>
            }
        ]
    )

    return routes 
}
export default Rutas