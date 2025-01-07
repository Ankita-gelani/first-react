import React, { useState } from "react";
const State = () => {


    const aonclick = ()=>{
        // setText('uppercase was clicked' );
        let newText=text.toUpperCase();
        setText(newText);

    }
    const aonchange = (event)=>{
        setText(event.target.value);

    }
    const [text, setText] = useState("Enter value here");
    return (
        <>
            <h1>export style 01</h1>
         <textarea value={text} onChange={aonchange}></textarea>
         <button onClick={aonclick}>click here</button>

            

        </>
    );
};
export default State;
