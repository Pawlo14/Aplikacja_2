import CookieManager from "smp-cookie-manager";

function Header() {
    return(
        <header className="App-header">
          <div id="tloo"></div>
          <div className="rozmycie"></div>
        <nav className="menu">
          <a href="/">Start</a>
          <a href="dodawanie">Dodaj</a>
          <a href="edytowanie">Edytuj</a>
          <a href="logowanie">Profil</a>
          <a href="" onClick={()=>CookieManager.deleteCookie('zalogowany')}>Wyloguj</a>
        </nav>
    </header>
    )
};
export default Header;