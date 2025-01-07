import React, { useState } from "react";

const Form = () => {
    const [obj, setobj] = useState("");
    const getvalue = (event)=>{
        setobj({...obj , [event.target.name]: event.target.value})

    }
    console.log(obj);
    return (
        <>
          <form >
      <label>First Name </label>
      <input type="text" name="fname"  onChange={getvalue}/>
      {/* <label>Enter your age:
        <input   type="number"    name="age"  value={fname}
          onChange={(event) => setName(event.target.value)}/>
        </label> */}

        <label>Last Name</label>
        <input type="text"   name="lname"    onChange={getvalue}/>
        <label>Gender</label>
        <input type="radio"   name="gender"  value='male'  onChange={getvalue}/>Male
        <input type="radio"   name="gender"  value='female'   onChange={getvalue}/>Female


        
        <input type="submit" />
    </form>

        </>
    );
};
export default Form;