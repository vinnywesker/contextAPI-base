import React, { useContext } from 'react'
import Context from './contextAPI'

export default props => {
    const [valor, sadsasd] = useContext(Context)
    return (
        <div>
            <h1>{valor}</h1>
        </div>

    )
}