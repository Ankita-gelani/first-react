import React, { useState, useMemo } from "react";

function Usememohook(){
  const [value, setvalue] = useState(0)
  const[number, setnumber] =useState(10)
  const tabHtml = useMemo(()=>{
    console.log('bjndfjbn')
  return <table>
    <thead>
      <tr>
        <th>{number}</th>
        <th>333</th>
        <th>333</th>
        <th>333</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>111</td>
        <td>111</td>
        <td>111</td>
        <td>111</td>
      </tr>
    </tbody>

  </table>
  
}, [number])
return(
  <>
  {tabHtml}
  <h2>{value}</h2>
  <h2>{number}</h2>
  <button onClick={() => setvalue(value+1)}>value</button>
  <button onClick={() => (setnumber+1)}>number</button>
  </>
)

}
export default Usememohook;
