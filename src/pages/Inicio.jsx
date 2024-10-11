import { useContext } from 'react'
import './Inicio.scss'
import '../components/Card.scss'
import Card from '../components/Card'
import useTitulo from '../hooks/useTitulo'
import ProductosContext from '../context/ProductosContext'


const Inicio = () => {
const { productos } = useContext(ProductosContext)
  useTitulo('Inicio')
  return (

        <main>
    <section className="section-cards">
      <header className="section-cards__header">
        <h1>Descubre tu belleza interior y exterior con nuestros productos de estética de alta calidad</h1>
        <p>¡Transforma tu rutina de cuidado personal hoy mismo!</p>
      </header>

        <div className="cards-container" id="contenedor-cards">
          {
            productos && productos.map((producto) => ( 
              <Card key={producto.id} producto={producto} />
            ))
          }
            
        </div>

      </section> 
    </main>
  )
}

export default Inicio