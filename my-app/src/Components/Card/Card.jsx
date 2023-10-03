import '../Card/Card.css'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {
	return (
            <Link to={`/fiche/${id}`} >
                <img src={cover} alt={title} />
                <h4>{title}</h4> 
            </Link>
        )
};
