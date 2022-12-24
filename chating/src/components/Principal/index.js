import './Principal.css';
import ContactInfo from '../ContactInfo';
import Chat from '../Chat';

const Principal = () => {
    return(
        <div className='principal'>
            <ContactInfo />
            <Chat />
        </div>
    )
}

export default Principal;