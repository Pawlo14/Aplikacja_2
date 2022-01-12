import axios from 'axios'; //wysyłanie zapytania na serwer
import Header from './header.js'
import react from 'react' //do useEffect, useState - zmienna do aktualizowania

function Ekranedytowania() {
  const [tabela, Ustawienie_tabela]=react.useState(null) //tabela wierszy, tabela -> zmienna
  function Edycja(){
    axios.get('http://localhost:3001/pobierz').then(wartosci=>{
     const wiersze = wartosci.data.map(rekord=>{
      return (
          <tr>
            <td>{rekord.Dystans}</td>
            <td>{rekord.Paliwo}</td>
            <td>{rekord.Wynik}</td>
            <td><input type="button" value="edytuj" id="guzik" onClick={()=>Aktualizujformularz(rekord.Dystans,rekord.Paliwo,rekord.id)}></input></td>
          </tr>
        )
      })
      Ustawienie_tabela(wiersze)
      
    })
  }

  function Aktualizujformularz(Dystans,Paliwo,ID){
    console.log(document.querySelector('#Dystans'))

    document.querySelector('#Dystans').value=Dystans
    document.querySelector('#Paliwo').value=Paliwo
    document.querySelector('#id').value=ID
  }

  function update(event) {
    let dystans = event.target.Dystans.value
    let spalone = event.target.Paliwo.value
    let id = event.target.id.value
    let wynik =  ((spalone/dystans)*100).toFixed(2)

    console.log('sprawdzenie wyoknania')
    axios.post(`http://localhost:3001/update`, {_dystans: dystans, _paliwo: spalone, _wynik: wynik, id: id}).then(Odpowiedz=>{
      console.log(Odpowiedz)
    })}

  react.useEffect(Edycja,[])

  return (
  <body>

    <Header/>

    <div className="lewa"></div>

    <div className="srodek">
    <h1>EDYTOWANIE</h1>

    <div id="content">

    <form className="obliczenia" onSubmit={update}>
      <input type="hidden" className="" id="id"></input>
      <label>
        <span>Przejechany dystans:</span>
        <input type="text" className="formularz" id="Dystans"/>
        <span>Spalone paliwo:</span>
        <input type="text" className="formularz" id="Paliwo"/> 
        </label>
      <input type="submit" value="Edytuj"/>
      </form>
      </div>
      
      </div>

      <div className="prawa">

      <table className="wynikispalania">
        <thead>
          <tr>
            <th>Dystans</th>
            <th>Paliwo</th>
            <th>Wynik</th>
          </tr>
          </thead>
        <tbody>

        {tabela}

        </tbody>

      </table>

      </div>

  </body>
  );
}

export default Ekranedytowania;