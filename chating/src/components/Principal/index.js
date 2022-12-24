import './Principal.css';
import ContextContact from '../../context/ContextContact';
import { useContext } from 'react';

const Principal = () => {

    const {contact} = useContext(ContextContact);
    return(
        <div className='principal'>
            <img className='selectedContactImage' src={contact.image}></img>
            <h2 className='selectedContactName'>{contact.name}</h2>
        </div>
    )
}

export default Principal;