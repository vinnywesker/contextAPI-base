import React, { useState } from 'react'
import Context from './contextAPI'
import Texto from './Texto'
import SubTexto from './SubTexto'
import Idade from './Idade'

export default props => {
  const [valor, setValor] = useState({
    User: 'Vazio',
    Idade: null
  }) // criei um estado
  return (// coloquei no hook (provider) o valor e a função setValor dentro da array que é pra desestruturar mais a frente .....
    <Context.Provider value={[valor, setValor]}> 
      <div>
        <Texto />
        <Idade/>
        <SubTexto />
      </div>
    </Context.Provider>
  )
}