import React from 'react'
import './index.scss';

import falsei from '../../icons/false.svg'
import lw from '../../icons/lw.svg'

export default function FalseC() {
    return (
        <div className='false'>
            <div className='first'>
                <img className='icon' src={falsei}/>
                <p className='pay'>Не успешная оплата!</p>
                <p className='sum'>2000 ₽</p>
            </div>
            <div className='second'>
                <p className='to'>Пополнение баланса пользователя Иван Иванов</p>
                <p className='date'>04.05.2021 18:22 UTC</p>
                <p className='hash'>123e4567-e89b-12d3-a456-426655440000</p>
                <p className='error'>Код ошибки: 0x12951285</p>
            </div>
            <div className='return'>
                <img src={lw}/>
                <button>Вернуться в магазин</button>
            </div>
        </div>
    )
}