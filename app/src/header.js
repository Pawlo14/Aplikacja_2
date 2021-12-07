function Header() {
    return(
        <header className="App-header">
        <nav className="menu">
          <div className="dropdown">
            <a href="/">Start</a>
            <a href="">Spalanie</a>
              <ul>
                <li><a href="dodawanie">Dodaj</a></li>
                <li><a href="edytowanie">Edytuj</a></li>
              </ul>
          </div>
          <a href="logowanie">Profil</a>
        </nav>
    </header>
    )
};
export default Header;