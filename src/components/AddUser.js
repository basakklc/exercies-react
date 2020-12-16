import React, { Component } from "react";

class AddUser extends Component{
    state = {
        name : "",
        email : ""
    };
    onNameChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onEmailChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });

    }
    onAddSubmit(e){
        const {addUser} =this.props;
        const {name,email}=this.state;
        const newUser ={
            id: Math.random(),
            name: name,
            email: email

        };
        addUser(newUser);
        e.preventDefault(); //sayfa yenilenmesi önleniyor
    }
    render() // componentin metodu -> override ediyoruz. JSX formatı sayfalara dönebiliyor bu şekilde
    {
        const{name,email}=this.state;
        return(
            <div className="card">
               <h4 className="card-header">Add New User</h4>
               <div className="card-body">
                   <form onSubmit={this.onAddSubmit.bind(this)}>
                       <div className="form-group">
                            <label htmlFor="name">Name</label>   
                            <input type="text" name="name" id="name" placeholder="enter " className="form-control" value={name} onChange = {this.onNameChange.bind(this)}/>
                        </div>     
                        <div className="form-group">
                            <label htmlFor="email">email</label>   
                            <input type="text" name="email" id="email" placeholder="enter " className="form-control" value={email} onChange = {this.onEmailChange.bind(this)}/>
                        </div>  
                        <button type="submit" className="btn btn-danger btn-block">Add New User</button>   
                   </form>
               </div>
            </div>
        );
    }
}
export default AddUser;