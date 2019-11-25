import React from 'react'


export const labeledFieldify = (Label: any, Field: any) => (
    ({ label, placeholder, value, editable, onChange }: any) => (
        <LabeledFieldElement
            label={<Label text={label} />}
            field={<Field
                placeholder={placeholder}
                value={value}
                editable={editable}
                onChange={onChange}
            />}
        />
    )
)

export const LabeledFieldElement = ({ label, field }: any) => (
    <div className='field is-horizontal'>
        <div className='field-label is-normal'>
            {label}
        </div>
        <div className='field-body'>
            {field}
        </div>
    </div>
)
