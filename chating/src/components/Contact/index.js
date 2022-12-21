import './Contact.css';

const Contact = (props) => {

    const seeContact = (event) => {
        event.preventDefault();
    }

    return(
        <div className='contact'>
            <button className='contactButton' onClick={seeContact}>
                <img className='contactImage' src={props.image}></img>
                <p className='contactName'>{props.name}</p>
            </button>
        </div>
    );
}

export default Contact;