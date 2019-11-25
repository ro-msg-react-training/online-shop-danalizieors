import React from 'react'
import { Link } from 'react-router-dom'


export const Buttons = ({ children }: any) =>
    <div className='buttons is-right'>
        {children}
    </div>

export const Button = ({ text, button = '', icon = '', onClick }: any) =>
    <button className={`button is-light ${button}`} onClick={onClick}>
        <span className='icon is-small'>
            <i className={`fas ${icon}`}></i>
        </span>
        <span>{text}</span>
    </button>

export const LinkButton = ({ to, text, button = '', icon = '' }: any) =>
    <Link to={to} className={`button is-light ${button}`}>
        <span className='icon is-small'>
            <i className={`fas ${icon}`}></i>
        </span>
        <span>{text}</span>
    </Link>
