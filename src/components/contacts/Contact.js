import React, { Component } from 'react'
import Contacts from './Contacts.js';
import {Consumer} from '../../context.js';

 class Contact extends Component {
  

     
    render() {
        return(
            <Consumer>
                {value=> {
                    const {contact } =value;
                    return (
                        <React.Fragment>
                        <h1 className="display-4 mb-2">
                           <span className='text-danger'>Contact
                           </span>
                           List
                        </h1>
                        {contact.map(contact=>(
                           <Contacts key={contact.id} contact={contact} /> 
                        ))}
                    </React.Fragment> 
                    )
                }}
            </Consumer>
        )

    }
}
export default  Contact;