import React, { useContext } from 'react'
import Context from './contextAPI'

export default props => {
const [value, setValue]  =  useContext(Context)
    return (
        <div>
            <input type="text"
            onChange={(e)=>{
                setValue(e.target.value)
            }}
            value={value}
            />
        </div>
    )
}