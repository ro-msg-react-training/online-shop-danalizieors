import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../models'
import Loader from '../common/Loader'
import Content from './Content'


export default () => {
    const status = useSelector((state: State) => state.status)
    const loading = status === 'loading'

    return <section className="section">
        <div className="container">
            <Loader enabled={loading} />
            <Content />
        </div>
    </section>
}
