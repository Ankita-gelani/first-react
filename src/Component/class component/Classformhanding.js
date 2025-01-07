import React, { Component } from "react";

class Classformhanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: {},
      tableData: JSON.parse(localStorage.getItem('data')) ||[],
      count: Number(localStorage.getItem('count')) || 1
    };
  }

   getvalue = async (event)=>{
    if(event.target.type == 'checkbox'){
        if(event.target.checked){
            if(this.state.obj[event.target.name] == undefined){
              this.state.obj[event.target.name] = [];
            }
            // obj.hobby =[...obj.hobby, event.target.value]
            this.setState({obj:{ ...this.state.obj, [event.target.name]: [...this.state.obj[event.target.name], event.target.value]}})
        }else{

            this.setState({ obj:{...this.state.obj, [event.target.name]: this.state.obj[event.target.name].filter(x => x != event.target.value)}})
        }
    }
    else if(event.target.type == 'file'){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload =() =>{
            this.setState({ obj:{...this.state.obj , [event.target.name]: reader.result}})
        };

    }
    else{
   this.setState({ obj:{...this.state.obj , [event.target.name]: event.target.value}})
    }

}

 saveData = (event) =>{
  event.preventDefault(); 

  if(this.state.obj.id){
      let index = this.state.tableData.findIndex(x => x.id == this.state.obj.id)
      this.state.tableData.splice(index , 1, this.state.obj)
      this.setState({tableData:[...this.state.tableData]})
      localStorage.setItem('data' , JSON.stringify(this.state.tableData))
  }else{
    this.state.obj.id = this.state.count;
  this.setState({tableData:[ ...this.state.tableData , this.state.obj], count : this.state.count + 1})
  localStorage.setItem('data', JSON.stringify([ ...this.state.tableData , this.state.obj]))
  localStorage.setItem('count', this.state.count+1)
  }
  this.setState({ obj: {}})

}
deleteRecord = (id) =>{ 
  let index = this.state.tableData.findIndex(x => x.id == id)
  if(index != -1){
    this.state.tableData.splice(index , 1)
      this.setState({tableData : [...this.state.tableData]})
      // this.setState({tableData:[ ...this.state.tableData.filter(x => x.id != id) ]})
      localStorage.setItem('data' , JSON.stringify(this.state.tableData))

  }
  this.setState({ obj: {}})

}
 editRecord = (record) =>{
  this.setState ({obj:{...record}})

}



  render() {
    console.log('render', this.state)

    return (
      <>
        <form onSubmit={this.saveData}>
          <label>First Name </label>
          <input
            type="text"
            name="fname"
            value={this.state.obj.fname || ""}
            onChange={this.getvalue}
          />
          <br />
          <br />
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={this.state.obj.lname || ""}
            onChange={this.getvalue}
          />
          <br />
          <br />
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.obj.gender === "male"}
            onChange={this.getvalue}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.obj.gender === "female"}
            onChange={this.getvalue}
          />
          Female
          <br />
          <br />
          <label>City</label>
          <select
            name="city"
            onChange={this.getvalue}
            value={this.state.obj.city || ""}
          >
            <option value=""></option>
            <option value="Surat">Surat</option>
            <option value="Vapi">Vapi</option>
          </select>
          <br />
          <br />
          <label>Batch</label>
          <input
            type="checkbox"
            name="batch"
            value="morning"
            checked={this.state.obj.batch?.includes("morning") || false}
            onChange={this.getvalue}
          />
          Morning
          <input
            type="checkbox"
            name="batch"
            value="evening"
            checked={this.state.obj.batch?.includes("evening") || false}
            onChange={this.getvalue}
          />
          Evening
          <br />
          <br />
          <label htmlFor="file">Profile</label>
          <input type="file" id="file" name="image" onChange={this.getvalue} />
          <div>
            <img
              src={this.state.obj.image}
              alt=""
              style={{ maxWidth: "100px" }}
            />
          </div>
          <button type="submit" >submitt</button>
          
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>City</th>
              <th>Batch</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.tableData.map((element, index) => (
              <tr key={index}>
                <td>{element.id}</td>
                <td>{element.fname}</td>
                <td>{element.lname}</td>
                <td>{element.gender}</td>
                <td>{element.city}</td>
                <td>{element.batch?.join(", ")}</td>
                <td>
                  <img src={element.image} width={40} alt="profile" />
                </td>
                <td>
                  <button onClick={() => this.editRecord(element)}>Edit</button>
                  <button onClick={() => this.deleteRecord(element.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Classformhanding;
