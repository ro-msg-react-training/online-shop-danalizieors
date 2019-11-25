import React from 'react'
import { useDispatch } from 'react-redux'
import { InputElement, PasswordElement } from './common/Elements'
import { fieldify, useInputState } from './common/Fields'


const Input = fieldify(InputElement)
const Password = fieldify(PasswordElement)

const useStates = () => ({
    username: useInputState(''),
    password: useInputState(''),
})

export default () => {
    const state = useStates()
    const dispatch = useDispatch()
    const login = () =>
        dispatch({
            type: 'USERS_LOGIN',
            payload: {
                data: {
                    username: state.username.value,
                    password: state.password.value
                }
            },
        })

    return <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-half is-offset-one-quarter">
                    <div className="box">
                        <Input placeholder='Username' {...state.username} editable={true} />
                        <Password placeholder='Password' {...state.password} editable={true} />
                        <button className="button is-primary is-fullwidth" onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </section >
}
