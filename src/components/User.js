import React, { useState } from 'react'

export const User = (props) => {
  const [count , setCount] = useState(0);
  const {name , address} = props;

  return (
    <div className='shimmer-card'>
        <h1>count : {count}</h1>
        <button onClick={()=>{
          setCount(count+1);
        }}><h1 className='btn'>+</h1></button>
        <h1>{name}</h1>
        <h2>{address}</h2>
    </div>
  )
};
