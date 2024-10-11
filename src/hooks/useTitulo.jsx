import { useEffect } from "react"

const useTitulo = (textoTitulo = 'Sin titulo') => {

    useEffect(() => {
        document.title = `Esencia Bella - ${textoTitulo}`
    }, [])

}

export default useTitulo