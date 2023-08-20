
"use client"
import React from 'react'

const ClickBtn = ({url}:{url:string}) => {
  return (
    <div id='targetElement'>
      <button  onClick={()=>{
        window.open(url,"_blank");
      }}>Click To Go</button>
    </div>
  )
}

export default ClickBtn
