import React from 'react'
import Parent from './Parent'
export default function Child(props) {
  return (
    <div>Child
     <b> Hello  {props.name} 
     {props.address} </b>
     <Parent/>

    </div>
  )
}
