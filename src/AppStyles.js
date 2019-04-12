import {StyleSheet} from 'aphrodite/no-important';
import { BlackSquare } from './stylesSquare';
export default StyleSheet.create({
  p:{
    color:'blue',
    fontSize:'22px'
  },
  container:{
    margin:'0 20%'
  },
  square: {
    ...BlackSquare,
    width: '230px',
    margin: '0 auto'
  },
  center:{
    margin: 'auto'
  }
})