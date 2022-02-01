import axios from 'axios';
import CookieManager from 'smp-cookie-manager';

function Ekranlogowania() {

  function logowanie(event){ //event bo korzystam z eventu onSubmit
    event.preventDefault() //blokuje domyślną akcję
    let _login = event.target.login.value
    let _haslo = event.target.haslo.value
    console.table({login: _login, password: _haslo})

    axios.post(`http://localhost:3001/login`, {login: _login, haslo: _haslo})
    .then(Odpowiedz=>{
    if (Odpowiedz.status === 200)
      {
        console.log(Odpowiedz)
        CookieManager.createCookie('zalogowany', _login, true)
        window.location.pathname='/'
      }
    else
      {
        CookieManager.deleteCookie('zalogowany')
      }
    console.log()
    })
  }


  return (
  <div className="App">
  
  <body id="tloo">
    <div className="lewa"></div>


    <div className="srodek">
    <form className="logowaniee" onSubmit={logowanie}>
      <label className="logowanie">
        <input type="text" className="formularz" name="login" placeholder="Login" />
        <input type="password" className="formularz" name="haslo" placeholder="Haslo" /> 
      </label>
      <input type="submit" className="przycisk" value="Zaloguj" />
      <a href="/" id="anuluj"><input type="button" className="przycisk" value="Anuluj" /></a>
      </form>
    </div>


    <div className="prawa"></div>
  </body>
  </div>
  );
}

export default Ekranlogowania;
