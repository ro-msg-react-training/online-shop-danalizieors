import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../models'


export default () => {
    const user = useSelector((state: State) => state.user)
    const dispatch = useDispatch()

    const name = user !== null ? user.fullName : ''
    const logout = () =>
        dispatch({
            type: 'USERS_LOGOUT',
            payload: {},
        })

    return <div className="navbar-end">
        <div className="navbar-item">
            <strong>{name}</strong>
        </div>
        <div className="navbar-item">
            <div className="buttons">
                <a className="button is-primary" onClick={logout}>
                    <strong>Logout</strong>
                </a>
            </div>
        </div>
    </div>
}
