import React from 'react';
// import { Img1 } from '../../images/magnifier_svg'
// import { Img2 } from 'https://cdn2.iconfinder.com/data/icons/celebration-party/48/13-512.png'
// import { Img3 } from '../../images/cart'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <a className="header_title" href="#">DEALERS</a>
            <div>
                <ul className="navbar__links">
                    <li className="navbar_item"><a className="navbar_itema" href="#">COLLECTION</a></li>
                    <li className="navbar_item"><a href="#">SHOP</a></li>
                    <li className="navbar_item"><a href="#">CATALOGS</a></li>
                    <li className="navbar_item"><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div className="navbar_right">
                {/* <a href="#"><img className="img_magnifier" src={Img1} alt=""/></a> */}
                    <a href="#"><img className="img_like" src='https://cdn2.iconfinder.com/data/icons/celebration-party/48/13-512.png' alt=""/></a>
                        {/* <a href="#"><img className="img_cart" src={Img3} alt=""/></a> */}
        </div>
        </div>
    );
};

export default Header;