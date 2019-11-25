import React from 'react'


export default ({ enabled }: any) => {
    const enabledStyle = enabled ? 'is-active' : ''

    return <div className={`loader-wrapper ${enabledStyle}`}>
        <div className='loader is-loading' />
    </div>
}
