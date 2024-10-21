import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 2, count2: 2}

  Mango = () => {
    this.setState(prevState => ({
      count1: prevState.count1 + 1,
    }))
  }

  Banana = () => {
    this.setState(prevState => ({
      count2: prevState.count2 + 1,
    }))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="main">
        <div className="container">
          <p className="heading">
            Bob ate <span className="count">{count1} </span>
            Mangoes <span className="count">{count2}</span> Bananas
          </p>
          <div className="block">
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button className="button" onClick={this.Mango} type="button">
                Eat Mango
              </button>
            </div>
            <div className="fruits">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="mango"
              />
              <button className="button" onClick={this.Banana} type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
