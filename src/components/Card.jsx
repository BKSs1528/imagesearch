import React from 'react'
import "./card.css"
export default function Card(props) {
    const{data,setbook}=props
  return (
    <div className='card'>
        <div className='hover'><button onClick={()=>{
            setbook(e=>[...e,data])
            alert("image added to bookmark")
        }}><i class="fa fa-bookmark"></i></button></div>
        <div className='card-image-holder'>
            <img src={data.urls.raw} alt="image"/>
        </div>
    </div>
  )
}
