import React from 'react'

function TextBox({testId, onChange, value, disabled}) {
    return (
        <div>
            <input disabled = {disabled} type="text" data-testid={testId} value = {value} onChange={(e)=>onChange(e.target.value)}></input>
        </div>
    )
}

export default TextBox
