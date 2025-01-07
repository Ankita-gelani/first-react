import React, { useState } from "react";

const Formscheckbox = () => {
    const [obj, setobj] = useState({});
    const[tableData,  settableData] = useState([])
    const[count, setcount] = useState(1)

    const getvalue = (event)=>{
        if(event.target.type == 'checkbox'){
            if(event.target.checked){
                if(obj[event.target.name] == undefined){
                    obj[event.target.name] = [];
                }
                // obj.hobby =[...obj.hobby, event.target.value]
                setobj({ ...obj, [event.target.name]: [...obj[event.target.name], event.target.value]})
            }else{
                // let a = []
                // Array.forEach((x,i) => {
                //     if(x != event.target.value){
                //         a.push(x)
                //     }
                // })
                // obj.hobby = obj.hobby.filter(x => x != event.target.value)
                setobj({ ...obj, [event.target.name]: obj[event.target.name].filter(x => x != event.target.value)})
            }
        }
      
        else{
        setobj({ ...obj , [event.target.name]: event.target.value})
        }

    }

    const saveData = (event) =>{
        event.preventDefault(); 

        if(obj.id){
            let index = tableData.findIndex(x => x.id == obj.id)
            tableData.splice(index , 1, obj)
            settableData([ ...tableData])
        }else{
        obj.id = count;
        setcount(count + 1)
        settableData([ ...tableData , obj])
        }
        setobj({})

    }
    const deleteReord = (id) =>{
        let index = tableData.findIndex(x => x.id == id)
        if(index != -1){
            tableData.splice(index , 1)
            settableData([ ...tableData])
            // settableData([ ...tableData.filter(x => x.id != id) ])

        }
        setobj({})

    }
    const editRecord = (record) =>{
        setobj({...record})

    }


    console.log(obj);

    return (
        <>
          <form >
                  {/* <label>Enter your age:
        <input   type="number"    name="age"  value={fname}
          onChange={(event) => setName(event.target.value)}/>
        </label> */}
        <label>First Name </label>
        <input type='text' name='fname' value={obj.fname || ''}  onChange={getvalue}/><br/><br/>
        <label>Last Name</label>
        <input type='text'   name='lname' value={obj.lname || ''}    onChange={getvalue}/><br/><br/>
        <label>Gender</label>
        <input type='radio'  name='gender'  value='male'  checked={obj.gender == 'male'} onChange={getvalue}/>Male
        <input type='radio'   name='gender'  value='female'  checked={obj.gender == 'female'}  onChange={getvalue}/>Female<br/><br/>
        <label>city</label>
        <select name="city" onChange={getvalue} value={obj.city || ''}>
            <option value=''></option>
            <option value='Surat'>Surat</option>
            <option value='Vapi'>Vapi</option>
        </select><br/><br/>
        

        <label>Batch</label>
        <input type='checkbox'  name='batch'  value='morning' checked={obj.batch?.includes('morning') == true}  onChange={getvalue}/>morning
        <input type='checkbox'   name='batch'  value='evening' checked={obj.batch?.includes('evening') == true}  onChange={getvalue}/>evening<br/><br/>




        
        <input type="submit" onClick={saveData} />
    </form>
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>city</th>
                <th>Batch</th>
                <th></th>

                
            </tr>
        </thead>
        <tbody>
            {
              tableData.map((element, index)=> {
                return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{element.fname}</td>
                    <td>{element.lname}</td>
                    <td>{element.gender}</td>
                    <td>{element.city}</td>
                    <td>{element.batch?.join(' ,')}</td>
                    <td>
                                <button onClick={() => editRecord(element)}>Edit</button>
                                <button onClick={() => deleteReord(element.id)}>Delete</button>
                            </td>
                
                </tr>)
              })  
            }
        </tbody>

    </table>

        </>
    );
};
export default Formscheckbox;