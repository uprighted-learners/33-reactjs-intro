import React from 'react'

export default function HiMom(props) {
    console.log("HiMom Component props: ", props)
    return (
        <h1>Hi {props.name}!!!!!!</h1>
    )
}
