import { Component } from "react";
class Classcomponent extends Component {
    constructor(){
        super();
       this.state ={
        count:10,
        arr:[],
        a:20
       };
    }
    changevalue(){
        this.setState({ a: 500 })
    }
    render(){
    return <>
    <h2>{this.state.a}{this.state.count}</h2>
    <button onClick={() => this.changevalue()}>Click</button>
    </>
        };
  };
  export default Classcomponent;