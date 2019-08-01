import React, { Component } from 'react'

class RandomKoala extends Component {

  state = {
    koala: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/koalas')
      .then(res => res.json())
      .then(koalas => {
        this.setState({
          koala: koalas[Math.floor(Math.random()*koalas.length)]
        })
      })
  }

  render () {
    console.log("rendering")
    return (
      <div className="app-children">
        Hello from RandomKoala
        <img src={this.state.koala.image_url} />
      </div>
    )
  }
}

export default RandomKoala