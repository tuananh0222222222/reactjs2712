import React from "react";

class Cart extends React.Component {

    state = {
        hoten:'tuasdsn anh',
        namsinh:'2004'
    }
    HandelOnchange = (event) => {
        this.setState({
            hoten : event.target.value
        })
    }

    click =() =>{
        alert("tuan anh");
    }
    render () {
        return (
            <>

            <div>
            <input value={this.state.hoten} type="text"  onChange={(event)=>{
                this.HandelOnchange(event)
            }}   />
                ho ten la {this.state.hoten}
            </div>
            <div className="go">
            ho ten la {this.state.namsinh}
            </div>
            <div className="3">
                <button onClick={()=>this.click()} >clickme</button>
            </div>
            </>
        )
    }
}

export default Cart