import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Range = (props) => {

			const [value, setValue] = useState(props.value);
console.log(value)


  const onChange = (event) =>{
  	// console.log(event.target.value)
  	// this.props.onChange(this.state.value)
  	// this.setState({
  	// 	value: event.target.value
		// })
		setValue(event.target.value)
		console.log(`Value = ${value}`)
  }


    return (
      <div className="range">
      	<input 
	      	type="range"
	      	value={value}
	      	min={props.min}
	      	max={props.max} 
	      	step={props.step}
	      	onChange={onChange}
      	/>

      </div>
    );
  
}
Range.defaultProps = {
	value:20,
	min: 0,
	max: 245,
	step: 1
}

Range.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
}
export default Range;