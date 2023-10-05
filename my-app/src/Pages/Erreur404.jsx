import Header from '../Components/Header/Header' ;
import Footer from '../Components/Footer/Footer' ;
import '../Pages/Erreur404.css';
import { Link } from "react-router-dom";


function Erreur404() {
    return  <div className="body">
                
                <Header/>
                    <div className="main">       
                        <div className="errorNumber">404</div>
                        <div className="errorMessage">Oups! La page que vous demandez n'existe pas.</div>
                        <Link to="/"  className='homeReturn'>Retourner sur la page d'accueil</Link>
                    </div>
                <Footer/>      
            </div>
}

export default Erreur404
