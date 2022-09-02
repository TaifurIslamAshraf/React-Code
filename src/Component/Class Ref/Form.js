import React, { Component, createRef } from 'react'

export default class form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.userNameRef = createRef()
      this.userPasswordRef = createRef()
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.userNameRef.current.style.color = "blue"
        const name = this.userNameRef.current.value;
        const pass = this.userPasswordRef.current.value;
        console.log({name,pass})

    }

  render() {
    return (
      <div>
        <form action="" onClick={this.handleSubmit}>
        <div>
        <label htmlFor="name">Name: </label>
            <br />
            <input type="text" name="name" id="name" ref={this.userNameRef} />
        </div>
        <div>
            <label htmlFor="Password">Passowrd: </label>
            <br />
            <input type="password" name="password" id="password" ref={this.userPasswordRef} />
        </div>
        <button>Submit</button>
        </form>
      </div>
    )
  }
}
