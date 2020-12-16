import React from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";

class App extends React.Component{

  deleteUser(id){ // state güncellemee
    let updatedUsers = this.state.users
    updatedUsers =updatedUsers.filter(user => user.id !==id); //id si 1 olmayanları sakla gibi 
    this.setState({
      users:updatedUsers
    });
  }

  addUser(newUser){
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users:updatedUsers
    });

  }
  constructor(props){ // bu componentin bir state i olsun -> Bu state JS objesi
    super(props)
    this.state = {
      users : [ // users arrayini User componentine props
        {
          id:1,
          name:"Başak KILIÇ",
          email:"basakkilic98@gmail.com"
        },
        {
          id:2,
          name:"Başak ",
          email:"basakkilic@gmail.com"
        }
      ]
    };
    this.deleteUser =this.deleteUser.bind(this);
    this.addUser =this.addUser.bind(this);
  }
  render(){

    return (  // jsx formatı return ediyoruz . Tek bir element dönecek şekilde 
      <div className="container"> 
        <h4>User App</h4>
        <hr/>
        <AddUser addUser={this.addUser}/>
        <hr/>
        <Users deleteUser={this.deleteUser} users = {this.state.users}/>    

      </div>

    );
  
  }
}

export default App;
