import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isLight: false,
  }

  Light = () => {
    this.setState({isLight: false})
  }

  Dark = () => {
    this.setState({isLight: true})
  }

  render() {
    const {isLight} = this.state
    const mainDiv = isLight ? 'lightMode' : 'darkMode'
    return (
      <div className="div-deco">
        <div className={mainDiv}>
          <h1>Click to Change Mode</h1>
          {isLight ? (
            <button type="button" className="light-mode" onClick={this.Light}>
              Dark Mode
            </button>
          ) : (
            <button type="button" className="dark-mode" onClick={this.Dark}>
              Light Mode
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default LightDarkMode
