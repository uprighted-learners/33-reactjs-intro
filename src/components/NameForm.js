import React, { useState } from 'react'

export default function NameForm() {
    const [name, setName] = useState('')

    console.log("state of name: ", name)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("form submitted!")
        alert(`Hello ${name}!`)
        setName('')
    }

    const handleInputChange = (event) => {
        console.log("handleInputChange event.target.value: ", event.target.value)
        setName(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={handleInputChange}
                    />
                </label>
                <button type='submit'>
                    Submit
                </button>
            </form>
            <h1>Hello {name}!</h1>
        </div>
    )
}
