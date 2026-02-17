import React from 'react'
import axios from 'axios'

function ApidDemo2() {
    const api = ()=>{
        const result = axios.get("https://dummyjson.com/products")
        console.log(result);
    }
  return (
    <div style={{textAlign:"center"}}>

        Apidemo2
        <button onClick={api}>GETdata</button>
    </div>
  )
}

export default ApidDemo2