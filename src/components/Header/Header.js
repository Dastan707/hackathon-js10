import React, { useContext, useState } from 'react';
import './Header.css';
import { productContext } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';




const Header = () => {
    const { search, searchData } = useContext(productContext);
    const [searchValue, setSearchValue] = useState('');


    const handleValue = (e) => {
        setSearchValue(e.target.value);
        search(e.target.value);
        // console.log(e.target.value);
        // console.log(searchData);
    }
    return (
        <div className="header">
            <a className="header_title" href="#">BOOT KIIM SHOP</a>
            <div className='header_list'>
                <ul className="navbar__links">
                    <li className="navbar_item"><a className="navbar_itema" href="#">COLLECTION</a></li>
                    <li className="navbar_item"><a href="#">SHOP</a></li>
                    <li className="navbar_item"><a href="#">CATALOGS</a></li>
                    <li className="navbar_item"><a href="#">CONTACT</a></li>
                    <li className="search-item">
                        <input className='inp-search' onChange={handleValue} type='text' />
                        <div className={searchValue ? 'search-result' : 'close'}>
                            {searchData.map(item => (
                                <Link to={`/details/${item.id}`}>
                                    <div className='search-items'>
                                        <img src={item.image} alt='images' /><br></br>
                                        {item.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="navbar_right">
                <a href="#">
                    <img className="img_like" src='https://cdn2.iconfinder.com/data/icons/celebration-party/48/13-512.png' alt="" />
                    </a>
            </div>
        </div>
    );
};

export default Header;