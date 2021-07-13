import React from 'react';

import './index.scss';
import l from '../../icons/l.svg'

export default function Back () {

    return (
        <div className='back'>
            <img src={l} />
            <h1>Пополнение баланса пользователя Иван Иванов</h1>
        </div>
    )
}