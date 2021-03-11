import React,{Component} from 'react';
import './App.css';


class Counter extends Component {

   constructor(){
       super();
   }

   state = {count: 0,   word: "initial"};

   componentDidMount(){
     // setInterval(()=> {this.increment()}, 1000);
   }

   increment = () =>  {
      this.setState({count: this.state.count+1})
   }

   updateWord = (e) => {
      e.preventDefault();
      this.setState({word: e.target.value})
   }

   resetWord = () => {
    this.setState({word: "Fresh"})
 }
 
   render = () => {
       return (
         <div>
             <div>Our current counter is : {this.state.count};</div>
             <div>Our current country is : {this.props.country}</div>
             <div>Our current word is : {this.state.word}</div>
             
             <input onChange={this.updateWord} />
             <div><button onClick={this.resetWord}>Reset word </button></div>
             
         </div>
       );
   }
}

export default Counter;