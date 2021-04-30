import React from 'react';

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
            {/* <a href="#"><img className="img_magnifier" src="./images/magnifier_svg.png" alt="">
                <a href="#"><img className="img_like" src="./images/like_heart.svg" alt=""></a>
                <a href="#"><img className="img_cart" src="./images/cart.png" alt=""></a>
                 */}
        </div>
    </div>
   
    );
};

export default Header;