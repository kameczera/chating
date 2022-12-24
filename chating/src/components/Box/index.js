import Menu from '../Menu';
import './Box.css';
import Principal from '../Principal';
import ContextContact from '../../context/ContextContact';
import { useState } from 'react';

const Box = () => {
    const initial = {
        contact: '',
        setContact: () => {}
    }
    const [contact, setContact] = useState(initial);
    return (
        <div className='box'>
            <ContextContact.Provider value={{contact, setContact}}>
                <Menu />
                <Principal />
            </ContextContact.Provider>
        </div>
    )
}

export default Box;