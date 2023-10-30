
import '../Pages/Erreur404.css';
import { Link } from "react-router-dom";


function Erreur404() {
    return <div className="body">
        <div className="main">
            <div className="errorNumber">404</div>
            <div className="errorMessage"><p align="center">Oups! La page que vous demandez n'existe pas.</p></div>
            <Link to="/" className='homeReturn'>Retourner sur la page d'accueil</Link>
        </div>
    </div>
}

export default Erreur404
