import { memo } from "react";
import React from 'react'

const Todo = ({items}) => {
    console.log("child")
  return (
    <div>
        {items&&items.map((item,i)=>(
            <li key={i}>{item}</li>
        ))}
    </div>
  )
}

export default memo(Todo)