import Header from './header.js';
import axios from 'axios';
import CookieManager from 'smp-cookie-manager';

function Ekrandodawania() {

  function obliczenia(event) {
    event.preventDefault()
    let dystans = event.target.dystans.value
    let spalone = event.target.spalone.value
    let wynik =  ((spalone/dystans)*100).toFixed(2)
    event.target.wynik.value=wynik

    if(CookieManager.getCookieValue('zalogowany'))
    {
      console.log(true)
      CookieManager.getCookieValue('zalogowany').then(cookievalue=>{
        console.log(cookievalue)
        axios.post("http://localhost:3001/obliczenia", {_dystans: dystans, _paliwo: spalone, _wynik: wynik, login: cookievalue.value}).then(Odpowiedz=>{
          console.log(Odpowiedz)
    
         })
      })
      
    }
    else
    {
      console.log(false)
    }
    
  }

  return (
  <body>

    <Header/>

    <div className="lewa"></div>

    <div className="srodek">
    <h1>DODAWANIE</h1>

    <form className="obliczenia" onSubmit={obliczenia}>
      <label>
        <span>Przejechany dystans:</span>
        <input type="text" className="formularz" id="dystans" placeholder="Podaj wartość w km" required/>
        <span>Spalone paliwo:</span>
        <input type="text" className="formularz" id="spalone" placeholder="Podaj wartość w L" required/> 
        <span>Wynik spalania</span>
        <input type="text" className="formularz" id="wynik" placeholder="L/100km" readOnly/> 
      </label>
      <input type="submit" className="przycisk" value="Dodaj" />
      </form>

    </div>

      <div className="prawa"></div>

    </body>
  );
}

export default Ekrandodawania;
