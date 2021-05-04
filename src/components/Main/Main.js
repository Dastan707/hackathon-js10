import React from 'react';
import {Img4} from '../../images/person_transparent'

const Main = () => {
    return (
        <div className="main">
        <div className="main_left">
            <h1 className="main_title1">MADEWELL</h1>
            <h2 className="main_title2">Summer Collection</h2>
            <div className="main_price">
                <span className="main_price1"><strong>1,499</strong></span>
                <span className="main_price2"><strong>$1,999</strong></span>
            </div>
            <div className="main_btns">
                <a href="#" className="main_btn1a"><button className="main_btn1">SHOP NOW</button></a>
                <a href="#" className="main_btn1a"><button className="main_btn2">SHOP NOW</button></a>
            </div>
        </div>
        <div className="main_right">
            <a href="#"><img className="main_img" src={Img4} alt=""/></a>
        </div>
    </div>
    );
};

export default Main;