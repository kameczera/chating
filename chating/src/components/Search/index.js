import './Search.css';

const Search = () => {
    return(
        <div className='search'>
            <button className='buttonsearch'><img src='./images/iconSearch.png' className='iconsearch'></img></button>
            <input type="text" className='menubar'/>
        </div>

    );
}

export default Search;