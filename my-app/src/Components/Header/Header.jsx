import './Header.css';
import logo from '../../Assets/logo.png';
import logoSmart from '../../Assets/logoSmart.png';
import { Link, useLocation } from "react-router-dom";


export default function Header() {

	const { pathname } = useLocation();
	const className = pathname === "/" ? "accueilUnderline" : "";
	const className2 = pathname === "/apropos" ? "aproposUnderline" : "";

	return (

		<div className="header">
			<div className="flexLogo">
				<img className="logo" src={logo} alt="logo"></img>
				<img className="logoSmart" src={logoSmart} alt="logo"></img>
			</div>
			<div className="textH">
				<Link to="/" className={`accueil ${className}`}>Accueil</Link>
				<Link to="/apropos" className={`apropos ${className2}`}>A Propos</Link>
			</div>
		</div>
	);
};

