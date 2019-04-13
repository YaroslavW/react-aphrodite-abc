import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  input: {
    ':focus': {
      outline: 'none',
      '::-ms-fill-lower':{
        background: '#50555C'
      },
      '::-ms-fill-upper':{
        background: '#50555C'
      },
      '::-webkit-slider-runnable-track':{
      background: '#50555C'
    },
    },
    '::-webkit-slider-runnable-track': {
      width: '100%',
      height: '14px',
      cursor: 'pointer',
      animate: '0.2s',
      boxShadow: '1px 1px 1px #50555C',
      background: '#50555C',
      borderRadius: '14px',
      border: '0px solid #000000'
    },
    '::-webkit-slider-thumb':{
      boxShadow: '0px 0px 0px #000000',
      border: '0px solid #000000',
      height: '20px',
      width: '40px',
      borderRadius: '12px',
      background: '#529DE1',
      cursor: 'pointer',
      marginTop: '-3px'
    },
    '::-moz-range-track':{
      width: '100%',
      height: '14px',
      cursor: 'pointer',
      animate: '0.2s',
      boxShadow: '1px 1px 1px #50555C',
      background: '#50555C',
      borderRadius: '14px',
      border: '0px solid #000000'
    },
    '::-moz-range-thumb':{
      boxShadow: '0px 0px 0px #000000',
      border: '0px solid #000000',
      height: '20px',
      width: '40px',
      borderRadius: '12px',
      background: '#529DE1',
      cursor: 'pointer'
    },
    '::-ms-track':{
      width: '100%',
      height: '14px',
      cursor: 'pointer',
      animation: '0.2s',
      background: 'transparent',
      borderColor: 'transparent',
      color: 'transparent'
    },
    '::-ms-fill-lower':{
      background: '#50555C',
      border: '0px solid #000000',
      borderRadius: '28px',
      boxShadow: '1px 1px 1px #50555C'
    },
    '::-ms-fill-upper':{
      background: '#50555C',
      border: '0px solid #000000',
      borderRadius: '28px',
      boxShadow: '1px 1px 1px #50555C'
    },
    '::-ms-thumb':{
      marginTop: '1px',
      boxShadow: '0px 0px 0px #000000',
      border: '0px solid #000000',
      height: '20px',
      width: '40px',
      borderRadius: '12px',
      background: '#529DE1',
      cursor: 'pointer'
    },
    height: '26px',
    margin: '10px 0',
    width: '100%',
  }
})