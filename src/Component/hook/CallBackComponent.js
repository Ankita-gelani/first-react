import React, { memo } from 'react'


function CallBackComponent(props) {
  const {setvalue,value} =props;
  console.log(props)
  return (
    <>
    <button onClick={() => props.setvalue(20)}>{props.children}</button>
    </>
  )
}

export default memo(CallBackComponent)