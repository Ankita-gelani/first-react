import { Component } from "react";
import React from 'react'

class Classlifecycle extends Component {
constructor(props){
    super(props);
    this.state={
        count:0
    };
    console.log('constructor', this.state)
}

static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps' ,props, state)
    return { };
}
shouldComponentUpdate(){
    console.log('shouldComponentUpdate', this.state.count)
    // if(this.state.count <= 5){
    //     return true
    // }else{
    //     return true
    // }
    return true
}
getSnapshotBeforeUpdate(a, b){
    console.log('getSnapshotBeforeUpdate', a, b)
    return{ abc : 999}
}
componentDidUpdate(a, b, c){
    console.log('componentDidUpdate', a, b, c)
    
}
componentDidMount(a, b, c){
    console.log('componentDidMount', this.state)
    localStorage.setItem('this.state', JSON.stringify(this.state))
    
}
componentWillUnmount(a, b, c){
    console.log('componentWillUnmount')
    localStorage.removeItem('this.state')
    
}

    render(){
        console.log('render')
        return <>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.setState({count: this.state.count +1})}>button</button>

        </>
            };
      };
      export default Classlifecycle;