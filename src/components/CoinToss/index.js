// Write your code here
import {Component} from 'react'
import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEAD_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEAD_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="toss-container">
        <div className="toss-card-container">
          <h1 className="toss-heading">Coin Toss Game</h1>
          <p className="toss-text">Heads (or) Tails</p>
          <img className="toss-image" src={tossResultImage} alt="toss result" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
        </div>
        <div className="count-container">
          <p className="total-count">Total: {totalCount}</p>
          <p className="Heads-count">Heads: {headsCount}</p>
          <p className="Tails-count">Tails: {tailsCount}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
