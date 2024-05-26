import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes,  Navigate} from 'react-router-dom';

// Importacion de Componentes
import Inicio from '../src/componentes/incio.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path='*' render={() => <Navigate to="/" />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
