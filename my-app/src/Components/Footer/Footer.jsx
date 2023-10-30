import '../Footer/Footer.css';
import logoF from '../../Assets/footerDesktop.png'
import logoFsmart from '../../Assets/footerSmart.png'

export default function Footer() {
	return (
		<div className="footer">
			<div className="logoFlex">
				<img className="logoF" src={logoF} alt="logo"></img>
				<img className="logoFsmart" src={logoFsmart} alt="logo"></img>
			</div>
		</div>
	);
};
