import '../Gallery/Gallery.css';
import datas from './datas';
import { Link } from 'react-router-dom';
//import Card from 

/***export default function Gallery() {
  
  return (
    <div className='section2'>
        {datas.map(data => {
            return (
              <div className='cardGallery img'>
                <Card
                    key={data.id}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                />
              </div>  
            )
        })}
    </div>
   )

}***/

export default function Gallery() {

    return (
      <Link to={'/fiche/{id}'}>
         <div className='section2'>
            {datas.map(data => (
              
              <div className="cardGallery" key={data.id}>
              
              <img
                id={data.id}
                className="cardImage"
                src={data.cover}
                alt="logement"
              />
                      <h6 className='titleCard'> {data.title} </h6>
                  
              </div>
                     
            ))}
            
      </div>
      </Link> 
    )
};

Gallery ();