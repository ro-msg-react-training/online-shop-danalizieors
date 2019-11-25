import React from 'react'
import Banner from './Banner'
import MainMenu from './MainMenu'
import RightMenu from './RightMenu'


export const dataTarget = 'dataTarget'

export default () => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <Banner />
        <div id={dataTarget} className="navbar-menu">
            <MainMenu />
            <RightMenu />
        </div>
    </nav >
)
