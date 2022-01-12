import Header from './header.js';
import user from './user.svg';
import axios from 'axios';

function Ekrandodawania() {

  function obliczenia(event) {
    let dystans = event.target.dystans.value
    let spalone = event.target.spalone.value
    let wynik =  ((spalone/dystans)*100).toFixed(2)
    event.target.wynik.value=wynik

    axios.post("http://localhost:3001/obliczenia", {_dystans: dystans, _paliwo: spalone, _wynik: wynik}).then(Odpowiedz=>{
      console.log(Odpowiedz)
    })
  }

  return (
  <body>

    <Header/>

    <div className="lewa"></div>

    <div className="srodek">
    <h1>DODAWANIE</h1>

    <div id="content">

    <form className="obliczenia" onSubmit={obliczenia}>
      <label>
        <span>Przejechany dystans:</span>
        <input type="text" className="formularz" id="dystans" required/>
        <span>Spalone paliwo:</span>
        <input type="text" className="formularz" id="spalone" required/> 
        <span>Wynik spalania</span>
        <input type="text" className="formularz" id="wynik" readOnly/> 
        </label>
      <input type="submit" value="Dodaj" />
      </form>
      </div>
    </div>

      <div className="prawa">
      <div className="zdj"><p className="dane">Tutaj będą dane samochodu oraz profilu</p>
      <img src={user} alt="Logo Użytkownika" id="user" /> </div>
      </div>

      </body>
  );
}

export default Ekrandodawania;
