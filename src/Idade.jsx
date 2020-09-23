import React, { useContext } from 'react'
import Context from './contextAPI'


export default props => {
    const [valor] = useContext(Context);
    return (
        <div>
            <h1>
              Idade do bonitão:  {valor.Idade}
            </h1>
        </div>

    )
}