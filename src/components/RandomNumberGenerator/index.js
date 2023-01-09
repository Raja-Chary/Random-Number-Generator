// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  onChangeNumber = () => {
    const getNumber = this.randomNumber()

    this.setState(() => ({
      number: getNumber,
    }))
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.onChangeNumber}
            className="button"
            type="button"
          >
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
