import { useEffect } from "react"

const useTitulo = (textoTitulo = 'Sin titulo') => {

    useEffect(() => {
        document.title = `Educación IT - ${textoTitulo}`
    }, [])

}

export default useTitulo