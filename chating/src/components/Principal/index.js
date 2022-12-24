import './Principal.css';
import ContextContact from '../../context/ContextContact';
import { useContext } from 'react';

const Principal = () => {

    const {contact} = useContext(ContextContact);
    console.log(contact);
    return(
        <div className='principal'>
            <h2 className='nameContact'>{contact}</h2>
        </div>
    )
}

export default Principal;