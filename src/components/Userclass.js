import React from "react";

class Userclass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userData : {
                name : "dummy name",
                location : "dummy location",
            }
        }
        console.log("constructor is called");
    }

    async componentDidMount(){
        // console.log(this.props.name+" componentDidMount");
        const data = await fetch("https://api.github.com/users/aditya711-code");
        const json = await data.json();
        this.setState({
            userData : json,
        })
        console.log("componentDidMount is called");
    }

    render(){
        const {name , location} = this.state.userData;
        console.log("render is called");
        // debugger;
        return(
            <div className="shimmer-card">
                <h1>{name}</h1>
                <h2>{location}</h2>
            </div>
        )
    }
}

export default Userclass;