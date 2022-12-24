import { useContext } from 'react';
import ContextContact from '../../context/ContextContact';
import './Contact.css';

const Contact = (props) => {

    const { setContact } = useContext(ContextContact);

    const seeContact = (event) => {
        event.preventDefault();
        setContact({
            name: props.name,
            image: props.image
        });
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