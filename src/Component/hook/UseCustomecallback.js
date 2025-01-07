import React, {  useState } from 'react'
import CallBackComponent from  './CallBackComponent';

function UseCustomecallback() {
    const [value, setvalue] = useState(4)
  return (
    <>
    
    {/* <CallBackComponent>b1</CallBackComponent> */}
    <CallBackComponent  setvalue={setvalue}>b2{value}</CallBackComponent>
    </>
  )
}

export default UseCustomecallback;
