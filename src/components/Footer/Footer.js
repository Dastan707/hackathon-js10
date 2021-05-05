import React from 'react';
import Img6 from '../../assets/images/adress_svg.png'
import Img7 from '../../assets/images/phone_svg.png'
import Img8 from '../../assets/images/email_svg.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="rows">
                <div className="footer_row1">
                    <div className="footer_row1__block1">
                        <h3 className="footer_row1__h3">About us</h3>
                        <p className="footer_p">Lorem ipsum dolor sit,<br/> amet consectetur adipisicing elit.<br/>Dolore alias laboriosam expedita!<br/> Molestiae, eos sapiente et dolore <br/>quis consequuntur eius nobis,<br/> vero corrupti suscipit repudiandae <br/> illo vel asperiores porro ab.</p>
                    </div>
                </div>
                <div className="footer_row2">
                    <div className="rows">
                        <div className="row2_1">
                            <h3 className="row2_1__h3">Quick Links</h3>
                        </div>
                        <div className="row2_2">
                            <ul className="row2_ul">
                                <li className="row2_li"><a href="#" className="row2_li__a">Sell online</a></li>
                                <li className="row2_li"><a href="#" className="row2_li__a">Features</a></li>
                                <li className="row2_li"><a href="#" className="row2_li__a">Shopping cart</a></li>
                                <li className="row2_li"><a href="#" className="row2_li__a">Store builder</a></li>
                            </ul>
                        </div>
                        <div className="row2_3">
                            <ul className="row3_ul">
                                <li className="row3_li"><a href="#" className="row3_li__a">Mobile <br/> commerce</a></li>
                                <li className="row3_li"><a href="#" className="row3_li__a">Dropshipping</a></li>
                                <li className="row3_li"><a href="#" className="row3_li__a">Website development</a></li>
                            </ul>
                        </div>
                        <div className="row2_4">
                            <ul className="row4_ul">
                                <li className="row4_li"><a href="#" className="row4_li__a">Point of sale</a></li>
                                <li className="row4_li"><a href="#" className="row4_li__a">Hardware</a></li>
                                <li className="row4_li"><a href="#" className="row4_li__a">Software</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_row3">
                    <div className="footer_row3b">
                        <h3 className="row3__h3">Contact Info</h3>
                        <ul className="row3__ul">
                            <li className="row3__li adress"><img src={Img6} className="adress_img" alt=""/> 203 Fake St. Mountain View,<br/> San Francisco, California, USA</li>
                            <li className="row3__li phone"><a href="tel://23923929210" className="row3__li_a"><img src={Img7} className="phone_img" alt=""/> +2 392 3929 210</a></li>
                            <li className="row3__li email"><img src={Img8} className="email_img" alt=""/> emailaddress@domain.com</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;