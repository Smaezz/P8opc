import './Banner.css';
import Image1 from'../../Assets/SourceA.png';

export default function Banner() {
	return (
	<div className="banner">
	        <img className="img1" src={Image1} alt="Paysage"></img>
		    <div className="textImg">Chez vous, partout et ailleurs</div>   
	</div>
	);
};
