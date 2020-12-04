import React, { Component } from 'react'

 class AddContact extends Component {
     constructor(props){
         super(props);
         this.nameInput=React.createRef();
         this.emailInput=React.createRef();
         this.phoneInput=React.createRef();
     }
  
    onSubmit= (e) => {
        e.preventDefault();
        const contact ={
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact);
        }
    static defaultProps ={
        name:'vlad',
        email: 'fred@yahoo.com',
        phone: '777-777-777'
    }
    render() {
        const {name,email,phone} =this.props;
        return (
            <div className='card mb-3'>
                <div className='card-header'>
                    Add Contact </div>   
                    <div className='card-body'>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-gorup">
                        <label htmlFor="name">Name  </label>
                        <br></br>
                        <input type="text" defaultValue={name} name="name" className="form-action-control-lg"
                        placeholder="Enter Name.."
                        ref={this.nameInput}
                       />
                    </div>
                    <div className="form-gorup">
                        <label htmlFor="email">Email  </label>
                        <br></br>
                        <input type="email" defaultValue={email} name="email" className="form-action-control-lg"
                        placeholder="Enter email.."
                        ref={this.emailInput}
                       />
                    </div>
                    <div className="form-gorup">
                        <label htmlFor="phone">Phone  </label>
                        <br></br>
                        <input type="text" name="phone" defaultValue={phone} className="form-action-control-lg"
                        placeholder="Enter phone.."
                        ref={this.phoneInput}
                        />
                    </div>
                    <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                    </form>
                     </div>   
           
            </div>
        )
    }
}

export default AddContact;