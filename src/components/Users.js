import React, { Component } from "react";
import User from "./User";


class Users extends Component{
    render(){   //burada props olarak gönderilen herbir userı gösteren component olulturacazç
       
        const {users, deleteUser} = this.props;
        return(
            <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
                {
                    users.map(user => {
                        const{id,name,email}=user;
                        return <User key = {id} id ={id} name={name} email={email} deleteUser={deleteUser}/>; 
                        // dinamik olarak user componeti oluşturuyoruz
                        //Eğer aynı componentten sürekli dönersek bunun anlaşılması için uniqe key prop vermemiz gerekiyor.
                    })
                }
 
            </tbody>            
        
              
          </table>
        );
    }
}
export default Users;