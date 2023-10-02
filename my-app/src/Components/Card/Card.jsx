import '../Card/Card.css'
import '../Gallery/Gallery'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {
	return (
            <Link to={`/fiche/${id}`}>
                <img src={cover} alt={title} />
                <h3>{title}</h3>	
            </Link>
        )
};
