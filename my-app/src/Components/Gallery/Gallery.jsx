import '../Gallery/Gallery.css';
import datas from './datas';
import '../Card/Card';

export default function Gallery() {

    return (
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
    )
};

Gallery ();