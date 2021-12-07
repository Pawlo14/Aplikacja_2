import Header from './header.js';

function Ekranlogowania() {
  return (
  <div className="App">
  <body>

    <Header/>

    <div id="content_m">
    <form>
      <label className="logowanie">
        Login
        <input type="text" className="dystans" />
        Hasło
        <input type="text" className="paliwo" /> 
        </label>
      <input type="submit" value="Wyślij" />
      </form>
      
    </div>

      </body>
    </div>
  );
}

export default Ekranlogowania;
