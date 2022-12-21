import './Contact.css';

const Contact = (props) => {

    const seeContact = (event) => {
        event.preventDefault();
        props.selectedContact(props.name);
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