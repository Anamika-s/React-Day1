import React, { Component } from 'react'
import Child1 from './Child1'
import State1 from './State1'
export default class Parent1 extends Component {
  render() {
    return (
      <div>Parent1

        <Child1 name="deepak"/>
        <Child1 name="deepak"/>
        <Child1 name="deepak"/>
        <State1 address="New Delhi"/>
      </div>
    )
  }
}
