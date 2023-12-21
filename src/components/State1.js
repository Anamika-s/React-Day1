import React, { Component } from 'react'

export default class State1 extends Component {
    state={
        name:"Ajay",
        address:this.props.address
    }
  change= ()=> 
  {
    alert("function called")
    this.setState({name:"deepak"});
  }
  ChangeAddress = (event)=>
{
    alert("a");
  console.log(event);
}
  render() {
    return (
      <div>State1
    <b> Name is {this.state.name} </b>
    Enter New Address : <input type="text" value={this.state.address} name="name" onChange={this.ChangeAddress(this)}></input>
    <i> Address is {this.state.address}</i>
    <button onClick={this.change}> Update Name </button>

      </div>
    )
  }
}
