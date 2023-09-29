import '../Carousel/Carousel.css';
import datas from '../Gallery/datas';







export default function Carousel() {
     return 
        <div className='carousel'>
            {datas.map(data => (
              <div className="carouselImage" key={data.id}>
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
}
