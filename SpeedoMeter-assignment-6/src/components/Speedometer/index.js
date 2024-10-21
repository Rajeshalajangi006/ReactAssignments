// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {acc: 0}

  Accelerate = () => {
    this.setState(prevState => {
      if (prevState.acc < 200) {
        return {acc: prevState.acc + 10}
      }
      return null
    })
  }

  Break = () => {
    this.setState(prevState => {
      if (prevState.acc > 0) {
        return {acc: prevState.acc - 10}
      }
      return null
    })
  }

  render() {
    const {acc} = this.state
    return (
      <div className="main">
        <i className="heading">SPEEDOMETER</i>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="spped"
          className="image"
        />
        <p className="middle">
          Speed is <span className="kms">{acc}mph</span>
        </p>
        <p className="text">Min Limit 0mph,Max Limit is 200mph</p>
        <div className="buttondiv">
          <button className="button1" onClick={this.Accelerate} type="button">
            Accelerate
          </button>
          <button className="button2" onClick={this.Break} type="button">
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
