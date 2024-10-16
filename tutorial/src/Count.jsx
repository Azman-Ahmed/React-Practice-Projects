import React, { Component } from 'react'

export class Count extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            cnt: 99
        }
    }

    increament()
    {
        this.state.cnt = this.state.cnt + 1;
        console.log(this.state.cnt);
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.cnt}</div>
        <button onClick={()=>this.increament()}>Increase</button>
      </div>
    )
  }
}

export default Count
