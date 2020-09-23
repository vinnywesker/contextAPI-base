import React, { useContext, useState } from 'react'
import Context from './contextAPI'
import Texto from './Texto'
import Texto2 from './SubTexto'

export default props => {
  const [valor, setValor] = useState('') // criei um estado
  return (// coloquei no hook (provider) o valor e a função setValor dentro da array que é pra desestruturar mais a frente .....
    <Context.Provider value={[valor, setValor]}> 
      <div>
        <Texto />
        <Texto2 />
      </div>
    </Context.Provider>
  )
}