
import Header from '../Components/Header/Header' ;
import Banner from '../Components/Banner/Banner';
import Gallery from '../Components/Gallery/Gallery'
//import Card from '../Components/Card/Card';
import Footer from '../Components/Footer/Footer';


function Home() {
    return  <div className="body">
                  <Header/>
                  <Banner/>
                  <Gallery/>
                  <Footer/>     
            </div>      
};


export default Home
