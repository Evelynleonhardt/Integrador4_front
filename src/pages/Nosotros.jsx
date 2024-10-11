 import './Nosotros.scss'
import useTitulo from "../hooks/useTitulo";

const Nosotros = () => {
  useTitulo('Nosotros');
  return (
    <main>
      <section className="section-cards__nosotros">
        <header className="section-cards__header">
        </header>
        <div className="cards-container__nosotros">
          <div className="card_nosotros">
            <article className="card__article__nosotros">
              <h2 className="card__heading_nosotros"> ¿Cómo empezó Esencia Bella? </h2>
              <div className="card__image-container1">
                <img src="/img/Esencia_Bella.png" alt="Fotos-marca" className="card__image" />
              </div>
              <div className="card__content">
                <div className="card__description_nosotros1">
                  <p>Somos Carla y Euge, amigas desde la infancia siempre compartimos una pasión por el maquillaje y el skincare desde que somos chicas. Soñamos con abrir un comercio dedicado a esto hace años</p>
                </div>
              </div>
            </article>
          </div>
          
          <div className="card_nosotros">
            <article className="card__article__nosotros2">
              <div className="card__image-container2">
                <img src="/img/clearskin2.jpg" alt="fotos-marca" className="card__image" />
              </div>
              <div className="card__content">
                <div className="card__description_nosotros2">
                  <p>La idea era vender solo maquillaje, pero como ambas estudiamos cosmetología se nos ocurrió empezar a vender skincare también. Para que la gente no tuviera que salir de su casa para sentir la piel más linda</p>
                </div>
              </div>
            </article>
          </div>

          <div className="card_nosotros">
            <article className="card__article__nosotros">
              <div className="card__image-container3">
                <img src="/img/clearskin.jpg" alt="fotos-marca" className="card__image" />
              </div>
              <div className="card__content">
                <div className="card__description_nosotros3">
                  <p>Hace 3 años estamos en la piel de muchas personas con nuestros productos. Gracias por acompañar a esta hermosa marca</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Nosotros;
