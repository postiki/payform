import React from "react";
import './index.scss'

import logo from '../../icons/logo.svg';
import mb from '../../icons/masterB.svg';

export default function VisualPayForm ( {numb, cvv, my} ) {
    return (
        <div className='visualpayform'>
            <div className='visualpayform__logo'>
                <img src={logo} />
                <img src={mb} />
            </div>
            <div className='visualpayform__data'>
                <div className='visualpayform__cardnumber'>
                    {numb ? <h1>{numb}</h1> : <h1>0000 0000 0000 0000</h1>}
                </div>
                <div className='visualpayform__altdata'>
                    <div className='visualpayform__holder'>
                        <h6>CARD HOLDER</h6>
                        <h1>Ivan Ivanov</h1>
                    </div>
                    <div className='visualpayform__expiresandcvv'>
                        <div className='expires'>
                            <h6>EXPIRES</h6>
                            {my ? <h1>{my}</h1> : <h1>20/77</h1>}
                        </div>
                        <div className='cvv'>
                            <h6>CVC/CVV</h6>
                            {cvv ? <h1>*{cvv[1]}{cvv[2]}</h1> : <h1>*##</h1>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}