import React, { Component } from 'react'

class StockTicker extends Component {

  state = {
    stockPrice: 54,
    color: 'white'
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateStockPrice()
    }, 1000)
  }

  updateStockPrice() {
    let currentPrice = this.state.stockPrice
    let newPrice = Math.floor(Math.random()*100)
    this.setState({
      stockPrice: newPrice,
      color: newPrice > currentPrice ? 'green': 'red'
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.stockPrice < this.state.stockPrice && this.state.color === 'red') {
  //     this.setState({
  //       color: 'green'
  //     })
  //   } else if (prevState.stockPrice > this.state.stockPrice && this.state.color === 'green') {
  //     this.setState({
  //       color: 'red'
  //     })
  //   }
  // }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render () {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style={{color: this.state.color}}>
            {this.state.stockPrice}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker
