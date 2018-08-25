import React from 'react';

const validation = (props) => {
	
	const style = {
		color: 'green'
	}

	let validationMessage = 'Text is long enough.';

	if( props.inputLength <= 5 ){
		validationMessage = 'Text is too short!';
		style.color = 'red';
	}
	return (


		<div>
		 <p style={style}>{validationMessage}</p>
			
		</div>

	)
}

export default validation;