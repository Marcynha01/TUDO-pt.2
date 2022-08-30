import React, { useState } from "react";
import './Velocidade.css'


const Velocidade = (props) => {
  const [distancia, setDistancia] = useState()
  const [tempo, setTempo] = useState()
  const [velocidade, setVelocidade] = useState()

  const handleChangeDistancia = (event) => {
    let newDistancia = event.target.value
    setDistancia(newDistancia)
  }

  const handleChangeTempo = (event) =>{
    let newTempo = event.target.value
    setTempo(newTempo)
  }

  const onClickCalcular = () => {
    let vm = distancia / tempo
    setVelocidade(vm)
  }

  return (
    <div>
      <header>
        <h1>{props.name}</h1>
      </header>
      <div className="container-velocidade">
        <input type="number" 
        placeholder="Distancia"
        value={distancia}
        onChange={handleChangeDistancia}
        />
        <input type="number"
         placeholder="Tempo"
         value={tempo}
         onChange={handleChangeTempo}
         />
        <button onClick={onClickCalcular}>
            Calcular
        </button>

        <input type="number" placeholder="Velocidade Média" readOnly value={velocidade}/>
      </div>
    </div>
  )
}
export default Velocidade;
