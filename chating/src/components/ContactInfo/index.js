import './ContactInfo.css';
import ContextContact from '../../context/ContextContact';
import { useContext } from 'react';

const ContactInfo = () => {
    const {contact} = useContext(ContextContact);
    return(
        <div className='ContactInfo'>
            <img className='selectedContactImage' src={contact.image}></img>
            <h2 className='selectedContactName'>{contact.name}</h2>
        </div>
    );
}

export default ContactInfo;