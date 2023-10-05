import '../Footer/Footer.css';
import logoF from '../../Assets/logo_footer.png'

export default function Footer() {
	return (
	<div className="footer">
	    <div className="logoF">
		<img className="logoF" src={logoF} alt="logo"></img>	
		</div>
		    <div className="droits"><i className="fa-regular fa-copyright"></i>2020 Kasa. All rights reserved</div>   
	</div>
	);
};
