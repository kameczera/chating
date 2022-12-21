import './Menu.css';
import ViewProfile from '../ViewProfile';
import Search from '../Search';
import Contacts from '../Contacts';

const Menu = () => {
    return(
        <div className='menu'>
            <ViewProfile />
            <Search />
            <Contacts />
        </div>
    );
}

export default Menu;