import Header from './header.js';

function Ekranlogowania() {
  return (
  <div className="App">
  
  <body id="tloo">
    <div className="lewa"></div>
    <div className="srodek">
    <form className="logowaniee">
      <label className="logowanie">
        <input type="text" className="login" placeholder="Login" />
        <input type="text" className="login" placeholder="Haslo" /> 
      </label>
      <input type="submit" value="Wyślij" />
      <input type="submit" value="Anuluj" href="/" id="anuluj"/>
      </form>
    </div>
    <div className="prawa"></div>
  </body>
  </div>
  );
}

export default Ekranlogowania;
