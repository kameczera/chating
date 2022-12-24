import Menu from '../Menu';
import './Box.css';
import Principal from '../Principal';
import ContextContact from '../../context/ContextContact';
import { useState } from 'react';

const Box = () => {
    const [contact, setContact] = useState({});
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