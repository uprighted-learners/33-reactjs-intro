import React from 'react'
import HiMom from './components/HiMom'

export default function App() {
    return (
        <>
            <HiMom
                someBitOfData={[1, 2, 3, 4, 5]}
                name="Mama"
            />
        </>
    )
}
