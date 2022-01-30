import axios from 'axios';
import cookie,{ addCookie, removeCookie } from './cookie.js';  //import addCookie i removeCookie, oraz default getCookieValue


function Ekranlogowania() {

  function logowanie(event){
    event.preventDefault()
    let _login = event.target.login.value
    let _haslo = event.target.haslo.value
    console.table({login: _login, password: _haslo})

  
    axios.post(`http://localhost:3001/login`, {login: _login, haslo: _haslo})
    .then(Odpowiedz=>{
    if (Odpowiedz.status === 200)
      {
        removeCookie('zalogowany')
        addCookie('zalogowany', _login)
        window.location.pathname='/'
      }
    else
      {
        removeCookie('zalogowany')
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
      <a href="/" id="anuluj">Anuluj</a>
      </form>
    </div>


    <div className="prawa"></div>
  </body>
  </div>
  );
}

export default Ekranlogowania;
