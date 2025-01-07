import React, { useEffect, useLayoutEffect, useState } from 'react'

function Functionlifecycle() {
    const[count, setcount] = useState(0)
    const[number, setnumber] = useState(0)
    useEffect(() => {
        console.log('count1')
    },[count])

    useEffect(() => {
        console.log('number')
    },[number])

    useEffect(() => {
        console.log('bfcbcf')
        return () =>{
        console.log('unmount 2')
        }
    },[])

    useEffect(() => {
        console.log('count number')
        return () =>{
        console.log('unmount 1')
        }
    },[count, number])

    useLayoutEffect(() => {
        console.log('count')
        return () =>{
        console.log('44444444444')
        }
    },[count])

  return (
    <>
    <div>Functionlifecycle {count} {number} </div>
    <button onClick={() => setcount(count+1)} >Click</button>
    <button onClick={() => setnumber(number+1)} >click1</button>
    </>
  )
}

export default Functionlifecycle