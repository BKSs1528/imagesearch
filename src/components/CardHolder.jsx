import React from 'react'
import Card from './Card'
import "./cardholder.css"
export default function CardHolder(props) {
    const{data,setbook}=props
  return (
    <div className='cardholder'>
        {data.map(x=>{
           return( <Card data={x} setbook={setbook}/>)
        })}
    </div>
  )
}
