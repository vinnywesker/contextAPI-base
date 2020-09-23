import React, { useContext } from 'react'
import Context from './contextAPI'

export default props => {
    const [value, setValue] = useContext(Context)
    return (
        <div>
            <input placeholder="Adicione a idade"
                type="text"
                onChange={(e) => {
                    let numero = e.target.value;
                    setValue({
                        ...value,
                        Idade: numero
                    })
                }}
                value={value.Idade}
            />
            <input placeholder="Adicione um Nome"
                type="text"
                onChange={(e) => {
                    setValue({
                        ...value,
                        Nome: e.target.value,
                    })
                }}
                value={value.Nome}
            />
        </div>
    )
}