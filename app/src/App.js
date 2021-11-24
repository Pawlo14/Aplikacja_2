import logo from './logo.jpg';
import user from './user.png';
import './App.css';

function App() {
  return (
  <div className="App">
  <body>

    <header className="App-header">
        <nav className="menu">
          <div className="dropdown">
            <a href="0">Start</a>
            <a href="dodawanie">Spalanie</a>
              <ul>
                <li><a href="0">Dodaj</a></li>
                <li><a href="0">Edytuj</a></li>
              </ul>
          </div>
          <a href="0">Profil</a>
        </nav>
    </header>

    <div id="content">


    <form>
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

    <footer> 
      <p>stopka</p>
       
    </footer>

      </body>
    </div>
  );
}

export default App;
