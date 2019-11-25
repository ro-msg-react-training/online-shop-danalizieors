import React, { useState } from 'react'


export const fieldify = (Element: any) => (
    ({
        placeholder,
        value,
        editable,
        onChange,
    }: any) => {

        const wrapped = {
            placeholder,
            value,
            readOnly: !editable,
            onChange: (event: any) => onChange(event.target.value),
        }

        return <div className='field'>
            <div className='control'>
                <Element {...wrapped} />
            </div>
        </div>
    }
)

export const useInputState = (initializer: any) => {
    const [state, setState] = useState(initializer)

    return {
        value: state,
        onChange: setState
    }
}
