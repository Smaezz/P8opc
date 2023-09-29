import Header from '../Components/Header/Header' ;
import Footer from '../Components/Footer/Footer' ;
import Slider from '../Components/Carousel/Carousel';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../Components/Gallery/datas'
import Collapse from "../Components/Collapse/Collapse"
//import greyStar from '../../assets/grey_star.png';
//import redStar from '../../assets/red_star.png';


export default function Fiche() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idAccomodation = useParams('id').id;
	const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
	
	useEffect(() => {
		const dataCurrentAccomodation = datas.filter(data => data.id === idAccomodation);
		setImageSlider(dataCurrentAccomodation[0].pictures);
	}, [idAccomodation]);

	const name = dataCurrentAccomodation[0].host.name.split(' '); 
	const rating = dataCurrentAccomodation[0].rating;
	const description  = dataCurrentAccomodation[0].description;
	const equipments = dataCurrentAccomodation[0].equipments;

	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation[0].title}</h1>
						<p>{dataCurrentAccomodation[0].location}</p>
						<div>
							{dataCurrentAccomodation[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodation[0].host.picture} alt="host of this accomodation" />
						</div>
							
						<div className="accomodation_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								//return (
									//<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								//)
							})}
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}

