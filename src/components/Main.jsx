import React, { useEffect, useState } from 'react'
import CardHolder from './CardHolder'
import { useNavigate } from 'react-router-dom'
export default function Main(props) {
    const nav=useNavigate()
    const{setbook}=props
    const[search,setSearch]=useState("")
    var inp="";
    const[data,setdata]=useState([{urls:{raw:"apple"}}])
    useEffect(()=>{
        fetch(`https://api.unsplash.com/search/photos?query=${search}&client_id=ZrfhVRNnk7yfJCMRM3d76rph5_WE6Et9rrQsqwOpNq4`)
        .then(x=>x.json())
        .then(y=>setdata(y.results))
    },[search])
    console.log(data)
  return (
    <div className='main'>
        <div className='header'>
        <h1>React photo search</h1><button onClick={()=>nav("/book")}>Bookmark</button>
        </div>
        
        <div className='input'><input type="text"  placeholder='search free high resolution images' onChange={e=>{inp=e.target.value}}/> <button onClick={()=>setSearch(inp)}>search</button></div>
        <CardHolder data={data} setbook={setbook}/>
    </div>
  )
}
