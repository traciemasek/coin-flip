import React from 'react'
import './Coin.css'

function Coin(props) {

  let img;
  props.headsOrTails === 'heads' 
  ? img = <img className='Coin-heads' alt="heads" src="https://tinyurl.com/react-coin-heads-jpg"/>
  : img = <img className='Coin-tails' alt="tails" src="https://tinyurl.com/react-coin-tails-jpg"/>

  return (
    <div className="Coin">
      {img}
    </div>
  )
}

export default Coin
