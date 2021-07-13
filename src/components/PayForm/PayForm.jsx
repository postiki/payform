import React, {useState, useEffect} from 'react';

import Inputmask from "react-input-mask";

import './index.scss';
import m from '../../icons/master.svg';
import v from '../../icons/visa.svg';
import lock from '../../icons/lock.svg'

export default function PayForm ( {number, my, cvv, validation} ) {

    const [cardNumb, setCardNumb] = useState('');
    const [cardMY, setCardMY] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [cardEmail, setCardEmail] = useState('');

    const success = () => {

        if (validateEmail(cardEmail)) {
            validation(true)
        } else {
            validation(false)
        }

        if ( validateMM() <= (Number(cardMY[0] + cardMY[1])) ){
            alert('MM верно')
        } else {
            alert('MM не верно')
        }

        if ( validateYY() <= (Number(cardMY[3] + cardMY[4])) ){
            alert('YY верно')
        } else {
            alert('YY не верно')
        }
    }

    function validateMM () {
        let now = new Date();
        return (now.getMonth() + 1)
    }

    function validateYY () {
        let now = new Date();
        return (now.getFullYear() - 2000)
    }

    function validateEmail(cardEmail) {
        let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return pattern.test(cardEmail);
    }

    useEffect(() => {
        number(cardNumb);
    }, [cardNumb]);

    useEffect(() => {
        my(cardMY);
    }, [cardMY]);

    useEffect(() => {
        cvv(cardCvv);
    }, [cardCvv]);

    return (
        <div className='bg'>
            <div className='payform'>
                <div className='payform__cardnumber'>
                    <Inputmask mask='9999 9999 9999 9999' type="text" name='number' placeholder='0000 0000 0000 0000'
                               value={cardNumb} onChange={(e) => setCardNumb(e.target.value)}/>
                    <div className='payform__logo'>
                        <img alt='master' className='master' src={m} />
                        <img alt='visa' className='visa' src={v} />
                    </div>
                </div>
                <div className='payform__dateandcvv'>
                    <div className='payform__date'>
                        <Inputmask mask='99/99' type="text" name="month" placeholder="MM / YY" value={cardMY}
                                   onChange={(e) => setCardMY(e.target.value)} />
                    </div>
                    <div className='payform__cvv'>
                        <Inputmask mask='999' type="text" name="cvv" placeholder="CVV/CVC" value={cardCvv}
                                   onChange={(e) => setCardCvv(e.target.value)}/>
                        <img alt='lock' src={lock} />
                    </div>
                </div>
                <div className='payform__email'>
                    <input className='payform__value' type='email' placeholder='E-MAIL' value={cardEmail}
                           onChange={(e) => setCardEmail(e.target.value)} />
                </div>
                <div className='payform__button'>
                    <button className='payform__apply' onClick={() => success()}>Оплатить 2 000.00 ₽</button>
                </div>
            </div>
        </div>
    )
}