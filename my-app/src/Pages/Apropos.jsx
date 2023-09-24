import Header from '../Components/Header/Header';
//import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer';
import Image2 from'../Assets/SourceB.png';
import Collapse from '../Components/Collapse/Collapse';

function Banner2(props) {
    return (
    <div className="Banner">
            <img className="img1" src={Image2} alt="Paysage"></img>  
    </div>
    );
    
};

function Apropos() {
    return <div class="body">
                <Header/>
                <Banner2/>
                <Collapse/>
                <Collapse/>
                <Collapse/>
                <Collapse/>
                <Footer/>
           </div>
}

export default Apropos
