import '../Collapse/Collapse.css';
import { useState } from 'react';
import arrow from '../../Assets/chevronUp.png';


export default function Collapse({ title, content}) {
	const [rotate, setRotate] = useState(false) ;

    return (
	<div className='collapse'>
	    <div className="boxTitle">
	        <h3 className='titleCollapse' onClick={() => setRotate(!rotate)}>
				{title}
				<img 
				   className={rotate ? 'arrow arrow_up' : 'arrow arrow_down'}
				   src={arrow}
				   alt="voir texte"
				   />
		    </h3>
        </div>
	    <div className={rotate ? 'tiroir_hidden' : 'tiroir'}>
			{Array.isArray(content) ? content.map((item, index) => {
				return (
					<p key={index}>{item}</p>
				)
			}) :content
		    }
		</div>   
	</div>)
}





