import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

	state = {
		persons: [
			{name:'Michele', age: 27},
			{name:'Jennifer', age: 25},
			{name:'Colt', age:22}
		]
	}

	switchNameHandler = (newName) => {
		//console.log('button clicked!!');
		this.setState({
			persons: [
				{name: newName, age: 27},
				{name:'Jennifer Kempinsky', age: 25},
				{name:'Colt Kempinsky', age:22}
			]
		})
	}

	nameChangeHandler = (event) => {
		this.setState({
			persons: [
				{name: 'Michele Kempinsky', age: 27},
				{name: event.target.value, age: 25},
				{name:'Colt Kempinsky', age:22}
			]
		})
	}


  render() {
    return (
      <div className="App">
        <h2>hello, I'm a react app.</h2>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
        	name={this.state.persons[0].name} 
        	age={this.state.persons[0].age}
        	click={this.switchNameHandler.bind(this, 'Virginia')}/>
        <Person 
        	name={this.state.persons[1].name} 
        	age={this.state.persons[1].age}
        	changed={this.nameChangeHandler}/>
        <Person 
        	name={this.state.persons[2].name} 
        	age={this.state.persons[2].age}>
        	Hobbies: skiing, road trips, craft beer
        </Person>
      </div>
    );
  }
}

export default App;
