import '../Card/Card.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import datas from '../Gallery/datas';

export default function Card({id, title, cover}) {
    const navigate = useNavigate();
    const dataCurrentAccomodation = datas.filter(data => data.id === id);
    if (dataCurrentAccomodation === undefined) {
        navigate('/Erreur404');
    }
	return (
            <Link to={`/fiche/${id}`} >
                <img src={cover} alt={title} />
                <h4>{title}</h4> 
            </Link>
        )       
};
