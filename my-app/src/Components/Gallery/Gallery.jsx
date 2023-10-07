import '../Gallery/Gallery.css';
import datas from './datas';
import Card from '../Card/Card';

export default function Gallery() {
  
  return (
    <div className='section2'>
        {datas.map((data,index) => {
            return (
              <div key={index} className='cardGallery img'>
                <Card
                    key={index}
                    id={data.id}
                    title={data.title}
                    cover={data.cover}
                />
              </div>  
            )
        })}
    </div>
   )

}
