import './ContactInfo.css';
import ContextContact from '../../context/ContextContact';
import { useContext } from 'react';

const ContactInfo = () => {
    const {contact} = useContext(ContextContact);
    return(
        contact.name !== undefined ?
        <div className='ContactInfo'>
            <img className='selectedContactImage' src={contact.image}></img>
            <h2 className='selectedContactName'>{contact.name}</h2>
        </div> : <div className='ContactInfo'>
            <h2 className='selectedContactName'>Selecione um contato</h2>
        </div>
    );
}

// contacts.length < 9 ?
//         <div className='contacts'>
//             {contacts.map(contact => <Contact name={contact.name} image={contact.image} key={contact.name} />)}
//         </div>
//         : ''

export default ContactInfo;