import React, { Component } from 'react'
import Coin from './Coin'

class Flip extends Component {
  state = {
    flips: 0,
    heads: 0,
    tails: 0,
    headsOrTails: null
  }

  handleClick = e => {
    let flip = this.flip()

    this.setState((prevState) => {
      return {
        headsOrTails: flip,
        flips: prevState.flips + 1,
        heads: prevState.heads + (flip === 'heads' ? 1 : 0),
        tails: prevState.tails + (flip === 'tails' ? 1 : 0),
      }
    })
  }

  //randomly returns heads or tails
  flip = () => {
    const faces = ["heads", "tails"]
    return faces[Math.floor(Math.random() * 2)]
  }

  render() {
    const { flips, heads, tails, headsOrTails } = this.state
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {
        <div>
            {flips > 0 && <Coin headsOrTails={headsOrTails}/>} 
            <button onClick={this.handleClick}>FLIP ME</button>
        </div>
        }
        
        <div>
          <p>Out of {flips} flips, there have been {heads} heads and {tails} tails.</p>
        </div>
      </div>
    )
  }
}

export default Flip