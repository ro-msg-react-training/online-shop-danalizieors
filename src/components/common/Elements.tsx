import React from 'react'


export const InputElement = (props: any) =>
    <input className='input' type='text' {...props} />

export const PasswordElement = (props: any) =>
    <input className='input' type='password' {...props} />

export const TextAreaElement = (props: any) =>
    <textarea className='textarea' {...props} />

export const LabelElement = ({ text }: any) =>
    <label className='label'>
        {text}
    </label>
