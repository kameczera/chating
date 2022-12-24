import { useContext } from 'react';
import ContextContact from '../../context/ContextContact';
import './Contact.css';

const Contact = (props) => {

    const { setContact } = useContext(ContextContact);

    const seeContact = (event) => {
        event.preventDefault();
        setContact(props.name);
    }

    return(
        <div className='contact' onClick={seeContact}>
            <button className='contactButton' onClick={seeContact}>
                <img className='contactImage' src={props.image}></img>
                <p className='contactName'>{props.name}</p>
            </button>
        </div>
    );
}

export default Contact;