import React from "react";

class Cart extends React.Component {

  state ={
    firstName :'',
    lastName : ''
  }
  handelFirstName = (event) => {
        this.setState({
            firstName : event.target.value
        })
  }
  handelLastName = (event)=>{
    this.setState({
        lastName : event.target.value
    })
  }
  handel = (event) =>{
    event.preventDefault();
   console.log("check data" ,this.state);
  }
    render () {
        return (
            <>
       
                <form>
                    <label >FirstName</label> 
                    <input type="text" 
                            value={this.state.firstName}  
                            onChange={(event) => this.handelFirstName(event)}
                     /><br/>
                    <label >LastName</label>
                    <input type="text" 
                    value={this.state.lastName} 
                    onChange={(event) => this.handelLastName(event)} /><br/>
                    <button type="button"  onClick={(event) => this.handel(event)}>gui</button>
                </form>
           
            </>
        )
    }
}

export default Cart