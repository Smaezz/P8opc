import './Header.css';
import logo from '../../Assets/logo.png';
import logoSmart from '../../Assets/logoSmart.png';
import { Link } from "react-router-dom";


export default function Header() {
	return (
	<div className="header">
	    <div className="flexLogo">
		<img className="logo" src={logo}	alt="logo"></img>
		<img className="logoSmart" src={logoSmart}	alt="logo"></img>
		</div>
		    <div className="textH">
			    <Link to="/" className='accueil'>Accueil</Link>
			    <Link to="/apropos" className='apropos'>A Propos</Link> 
	        </div>   
	</div>
	);
};

