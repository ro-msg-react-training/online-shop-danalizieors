import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../models'
import Login from './Login'
import Page from './Page'


export default () => {
    const user = useSelector((state: State) => state.user)

    return false
        ? <Login />
        : <Page />
}
