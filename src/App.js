import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Radium, {StyleRoot} from 'radium';

class App extends Component {

	state = {
		persons: [
			{ id: 'ldskjfsd', name:'Michele', age: 27},
			{ id: 'jfoeiweo', name:'Jennifer', age: 25},
			{ id: 'jowiejfe', name:'Colt', age:22}
		],
		showPersons: false, 
		input: [
			{ val: '', len: 0 }
		]
	}

	// switchNameHandler = (newName) => {
	// 	//console.log('button clicked!!');
	// 	this.setState({
	// 		persons: [
	// 			{name: newName, age: 27},
	// 			{name:'Jennifer Kempinsky', age: 25},
	// 			{name:'Colt Kempinsky', age:22}
	// 		]
	// 	})
	// }

	deletePersonHandler = ( personIndex ) => {

		const persons = [...this.state.persons];
		//const persons = this.state.persons.slice();
		persons.splice( personIndex, 1 );

		this.setState({
			persons: persons
		});

	}

	nameChangeHandler = (event, id ) => {

		// update the name but only for the person in which input field we type
		const personIndex = this.state.persons.findIndex( p => {
			// return true or false
			// checking each element passed to the annonymous function. checking each.id against (id) passed into function
			return p.id === id;
		});
		// will return to personIndex the index in the array in which the person's id is equal

		// now we can reach out to the state and get the person index.
		// use the spread operator (...)  and create a new javascript object
		const person = { ...this.state.persons[personIndex] };

		// alternative:
		// const person = Object.assign( {}, this.state.persons[personIndex]);

		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		// finally we can set the state with the copy of the persons array
		this.setState({
			persons: persons
		});
	}

	togglePersonsHandler = (event) => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		});
	}


	inputLengthHandler = (event) => {
		
		let inputLength = event.target.value.length;

		this.setState({
			input: [
				{ val: event.target.value, len: inputLength }
			]
		})
	}


  render() {

  	const style = {
  		backgroundColor: '	#5cb85c',
  		color: '#fff',
  		width: 'auto',
  		fontSize: '18px',
  		padding: '5px 30px',
  		borderRadius: '5px',
  		border: '2px solid green',
  		cursor: 'pointer',
  		':hover': {
  			backgroundColor: 'green',
  			transition: 'all .5s'
  		}

  	};
	let persons = null;
	let inputLength = null;
	let classes = [];
	let overTwentyFive = this.state.input[0].len >= 25;

	if( overTwentyFive ){
		classes = ['red', 'bold'].join(' ');
		inputLength = (
			<p>Oops... the max characters allowed is 25.</p>
		)
	} else {
		inputLength = (
			<p>Input Length: {this.state.input[0].len}</p>
		)
	}

	if( this.state.showPersons ){
		persons = (
		<StyleRoot>
			<div>

				{this.state.persons.map( (person, index) => {
					return <Person 
						click={ () => this.deletePersonHandler(index)} 
						name={person.name} 
						age={person.age} 
						key={person.id}
						changed={ (event) => this.nameChangeHandler( event, person.id )}
						/>
				})}

		    </div>
	    </StyleRoot>
	    )
	    style.backgroundColor = '#d9534f';
	    style.border = '2px solid red';
	    style[':hover'] = {
	    	backgroundColor: 'red',
  			transition: 'all .5s'
	    }
	} else {
		persons = (
			<p>No Persons</p>
		)
	}



    return (
      <div className="App">
        <h2>hello, I'm a react app.</h2>
        <input type="text" maxLength="25" onChange={ (event) => this.inputLengthHandler(event)} value={this.state.inputValue} placeholder={this.state.input[0].val}/>
        <p>{this.state.input[0].val}</p>
        <p className={classes}>{inputLength}</p>
        <Validation inputLength={this.state.input[0].len}/>
        <button 
        	style={style}
        	onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
