import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import {Consumer} from '../../context';
import axios from 'axios';


 class Contacts extends Component {

     
     state={
         showContactInfo:false
     };
     onShowClick =e=>{

        this.setState({showContactInfo:!this.state.showContactInfo});
        console.log(this.state);
     }
     onDeleteClick =(id,dispatch)=>{
         console.log('here');
         axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`,
        { 
      headers: {
          'Access-Control-Allow-Origin': '*',
       }}  )
         .then(res  =>  dispatch({type:'DELETE_CONTACT',payload:id}));
     }
    render() {
        const {id,name,email,phone} = this.props.contact;
        const {showContactInfo}=this.state;
        return (

            <Consumer>
                {value=>{
                    const  {dispatch} =value;
                    return (
                <div className="card card-body mb-3">
                <h4>{name} <i onClick={this.onShowClick.bind(this,name)} className="fa fa-sort-down"
                style={{cursor:'pointer'}}
                
                /> <i className="fa fa-times" style={{cursor:'pointer',float:'right',color:'red'}}
                onClick={this.onDeleteClick.bind(this,id,dispatch)}
                ></i>
                <Link to={`contact/edit/${id}`}>
                    <i
                     className="fa fa-pencil"
                     style={{
                         cursor:'pointer',
                         float:'right',
                         color:'black',
                         marginRight:'1rem'
                     }} 
                     ></i>
                </Link>
                
                </h4>
               {showContactInfo?( <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone:{phone}</li>


        </ul>):null}
               
            </div>
                    )
                }}

            </Consumer>
            
        )
    }
}

Contacts.propTypes ={
    contact:PropTypes.object.isRequired,
   

};
export default Contacts;