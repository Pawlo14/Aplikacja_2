import './style.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
//github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
import Mainpage from './main.js';
import Ekranlogowania from './ekranlogowania.js';
import Ekrandodawania from './ekrandodawania.js';
import Ekranedytowania from './ekranedytowania.js';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path="/logowanie" element={<Ekranlogowania/>}/>
      <Route path="/dodawanie" element={<Ekrandodawania/>}/>
      <Route path="/edytowanie" element={<Ekranedytowania/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
