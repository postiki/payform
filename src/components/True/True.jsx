import React from 'react'
import './index.scss';

import truei from '../../icons/true.svg'
import lw from "../../icons/lw.svg";

export default function TrueC () {
    return (
        <div className='true'>
            <div className='fup'>
                <img className='icon' src={truei}/>
                <p className='pay'>Успешная оплата!</p>
                <p className='sum'>2000 ₽</p>
            </div>
            <div className='fdown'>
                <p className='to'>Пополнение баланса пользователя Иван Иванов</p>
                <p className='date'>04.05.2021 18:22 UTC</p>
                <p className='hash'>123e4567-e89b-12d3-a456-426655440000</p>
            </div>
            {/*<div className='return'>*/}
            {/*    <img src={lw}/>*/}
            {/*    <button>Вернуться в магазин</button>*/}
            {/*</div>*/}
        </div>
    )
}