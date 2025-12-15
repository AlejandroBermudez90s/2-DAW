import {useContext} from 'react';
import TemaContext from '../contextos/TemaContext';

const TemaName = () => {
    
    const tema = useContext(TemaContext);
    return (
        <div>
            <p>{tema.name}</p>
        </div>
    )
}

export default TemaName;