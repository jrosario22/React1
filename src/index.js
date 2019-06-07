import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class ContactCard extends React.Component{
  render(){
    return (
        <div>
        <label>Name: {this.props.name}</label>
        <br></br>
        <label>Mobile Phone: {this.props.mobileNum}</label>
        <br></br>
        <label>Work Phone: {this.props.workNum}</label>
        <br></br>
        <label>Email: {this.props.email}</label>
        </div> 
    
    );
  }
}

class Number extends React.Component{
  constructor(props){
      super(props)
      this.state = {number: this.props.value};
  }
  increment = () => {
    this.setState((state) => {
      console.log(state);
      return {number: state.number + 1};
    });
  }
  decrement = () => {
    this.setState((state) => {
      console.log(state);
      if(state.number <= 0){
        return alert("Cannot be less than 0");
      }
      else {
        return {number: state.number - 1};
      }
    });
  }
  render(){
      return (
          <div>
              <p>{this.state.number}</p>
              <button onClick={this.increment}>Increment</button>
              <button onClick={this.decrement}>Decrement</button>
          </div>
      )
  }
}


const person1 = <ContactCard name="Mary"  mobileNum="212-555-5555" workNum="347-555-7777" email="mary@gmail.com"/>;

const person2 = <ContactCard name="John"  mobileNum="212-555-5555" workNum="347-555-7777" email="john@gmail.com"/>;

const person3 = <ContactCard name="Joseph"  mobileNum="212-555-5555" workNum="347-555-7777" email="joseph@gmail.com"/>;

let number = <Number value={10}/>;

ReactDOM.render(
  person1,
  document.getElementById("person1")
);

ReactDOM.render(
  person2, 
  document.getElementById("person2")
);

ReactDOM.render(
  person3,
  document.getElementById("person3")
);

ReactDOM.render(
  number,
  document.getElementById("number")
);

