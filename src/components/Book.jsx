import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
export default function Book(props) {
    const nav=useNavigate()
    const{book}=props
  return (
    <>
    <div className='header'>
        <h1>Book mark</h1><button onClick={()=>nav("/")}>Home</button>
        </div>
    <div className='cardholder'>
        {book.map(x=>{
           return( <Card data={x} />)
        })}
    </div>
    </>
  )
}
