import './App.css';
import Ciudades from './Inicio/Ciudades';
import MainBanner from './Inicio/MainBanner';
import Mensaje from './Inicio/Mensaje';
import Noticias from './Inicio/Noticias';

function App() {
  return (
    <div>
      <MainBanner/>
      <Mensaje/>
      <Noticias/>
      <Ciudades/>
    </div>
  );
}

export default App;
