import React from 'react';
import './Payment.css'
import {Link} from 'react-router-dom'

const Payment = () => {
    return (
        <div class="checkout">
        <div class="card">
          <div class="front side">
            <span class="company">
              CARD
            </span>
            PAYMENT CARD
            <input type="text" placeholder="Card number" class="cc-num" />
            <div>
              Expires:
              <input type="text" placeholder="MM/YY" class="cc-exp" />
            </div>
          </div>
          <div class="back side">
            <div class="stripe"></div>
            <div class="signature">
              <span class="right">
              CVC: <input type="text" placeholder="000" class="cc-cvc" maxlength="4" />
              </span>
              <span class="sig">
                our lovely customer
              </span>
            </div>
          </div>
        </div>
         <div class="addr">
         <input type="text" placeholder="Address Line 1" />
          <input type="text" placeholder="Address Line 2" />
          <input type="text" placeholder="Town" />
          <input type="text" placeholder="Postcode" />
          <input type="text" placeholder="Country" />
         </div>
         <Link to='/'>
         <div class="button">
          Buy
        </div>
        </Link>
      </div>
    );
};

export default Payment;