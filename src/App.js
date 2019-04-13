import React, { Component } from 'react';
import { css } from 'aphrodite/no-important';
import styles from './AppStyles.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <p className={css(styles.p, styles.container)}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore minima corporis perspiciatis voluptatum aperiam. Dolores a, iure error incidunt eveniet illum libero veritatis quia doloribus maiores ad repellendus sint?
        Veniam aliquam quidem quas consectetur assumenda non eveniet natus blanditiis dicta! Nobis fugit officia blanditiis eligendi ipsum! Veniam consequatur, temporibus doloribus laborum sint id obcaecati libero aliquam, eius sit numquam.
        Quod, beatae? Animi, quaerat doloremque. Adipisci iste optio sit accusantium minus tenetur commodi dolore vel id, voluptate saepe sequi ut est doloribus soluta eum blanditiis, quaerat nisi et ea aliquam!</p>
        <div className={css(styles.square, styles.container, styles.center)}></div>
        
      </div>
    );
  }
}

export default App;
