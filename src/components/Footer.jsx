import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <p>Suscribite a nuestro Newsletter</p>
        <input type="email" className="email" id="email" placeholder="Email" />
      </div>
      
      <ul className="footer__description">
        <li><a href="/" className="footer__links">Inicio</a></li>
        <li><a href="/views/carrito.html" className="footer__links">Carrito</a></li>
        <li><a href="/views/contacto.html" className="footer__links">Contacto</a></li>
        <li><a href="/views/nosotros.html" className="footer__links">Nosotros</a></li>
      </ul>

      <div className="footer__contact">
        <ul>
          <li>Contacto</li>
          <li>Teléfono: 123456789</li>
          <li>Mail: Esenciabella@gmail.com</li>
        </ul>
      </div>

      <div className="footer__map">
        <p>Dónde estamos</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d210253.7423517312!2d-58.421015!3d-34.573433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59c771eb933%3A0x6b3113b596d78c69!2sPalermo%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1717891342192!5m2!1ses-419!2sar"
          width="250"
          height="150"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
