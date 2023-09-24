
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Fiche from './Pages/Fiche';
import Apropos from './Pages/Apropos';
import Erreur404 from './Pages/Erreur404';
import './App.css';

function App() {             
    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche" element={<Fiche />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/erreur404" element={<Erreur404 />} />
        </Routes>
    </div>
);
}

export default App;