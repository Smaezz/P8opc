import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Fiche from './Pages/Fiche';
import Apropos from './Pages/Apropos';
import Erreur404 from './Pages/Erreur404';
import './App.css';

function App() {             
    return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche/:id" element={<Fiche />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Erreur404 />} />
        </Routes>
        <Footer/>
    </div>
);
}

export default App;