import React, { Component } from 'react'
import StockTicker from './StockTicker'
import DigitalClock from './DigitalClock'

class WidgetSelector extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedWidget: 'Clock'
    }
    this.updateSelectedWidget = this.updateSelectedWidget.bind(this)
  }
  

  updateSelectedWidget(e) {
    this.setState({
      selectedWidget: e.target.textContent
    })
  }

  renderWidget() {
    switch(this.state.selectedWidget) {
      case 'Clock':
        return <DigitalClock />
      case 'Ticker': 
        return <StockTicker />
      default:
        return ''
    }
  }

  render () {
    return (
      <div className="app-children">
        <button onClick={this.updateSelectedWidget}>Clock</button>
        <button onClick={this.updateSelectedWidget}>Ticker</button>
        { this.renderWidget() }
      </div>
    )
  }
}

export default WidgetSelector
