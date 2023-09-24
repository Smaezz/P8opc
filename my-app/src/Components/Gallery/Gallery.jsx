import '../Gallery/Gallery.css';
import datas from './datas';
import '../Card/Card';

export default function Gallery() {

    return (
      <div className='section2'>
            {datas.map(data => (
                    <div className='cardGallery'>
                      <img class='cardImage' src={data.cover} alt="logement"></img>
                      <div className="hidden">
                        key={data.id}
                        id={data.id}
                      </div>
                      <h6 className='titleCard'> {data.title} </h6>
                    </div>
            ))}
      </div>
    )
};

Gallery ();