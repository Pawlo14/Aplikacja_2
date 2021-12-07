import user from './user.svg';
import Header from './header.js';

function Mainpage() {
  return (
  <div className="App">
  <body>

    <Header/>

    <div id="content">


    <form className="obliczenia">
      <label>
        Przejechany dystans:
        <input type="text" className="dystans" />
        Spalone paliwo
        <input type="text" className="paliwo" /> 
        </label>
      <input type="submit" value="Wyślij" />
      </form>
      <div className="red"><p className="dane">Tutaj będą dane samochodu oraz profilu</p>
      <img src={user} alt="Logo Użytkownika" id="user" />
      </div>
    </div>


      </body>
    </div>
  );
}

export default Mainpage;
