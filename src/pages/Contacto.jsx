import './Contacto.scss'
import useTitulo from "../hooks/useTitulo";

const Contacto = () => {
  useTitulo('Contacto');
  return (
    <form className="information">
      <fieldset className="box">
        <legend className="title">Datos personales</legend>
        <label className="label_form">
          Nombre: <input type="text" name="nom" className="input" />
        </label><br />
        <label className="label_form">
          Apellidos: <input type="text" name="ape" className="input-a" />
        </label><br />
        <label className="label_form">
          Teléfono: <input type="text" name="tel" className="input" />
        </label><br />
      </fieldset>
      <br />
      <fieldset className="box">
        <legend>Dejanos tu consulta</legend>
        <label>
          <input type="text" name="consulta" className="consulta" />
        </label><br />
      </fieldset><br />
      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
}

export default Contacto;
