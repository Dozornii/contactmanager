import React, { Component } from 'react'

export default class Test extends Component {
    state ={
        title :'',
        completed:''
    };

    componentDidMount(){
        console.log("componentDidMount...");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
             .then(data => this.setState({
                 title:data.title,
                 completed:data.completed
             }));
    }
   /* componentWillMount(){
        console.log("componentWillMount...");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate...");
    } */
    render() {
        const {title,completed} = this.state ;
        return (
            <div>
                <h1>{completed}</h1>
                <h2>{title}</h2>
            </div>
        )
    }
}
