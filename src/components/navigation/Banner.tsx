import React from 'react'
import { dataTarget } from './Navigation'


export default () => (
    <div className='navbar-brand'>
        <a className='navbar-item'>
            <img src='online-store.png' />
        </a>

        <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target={dataTarget}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
        </a>
    </div>
)
