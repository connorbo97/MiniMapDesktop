import React, { useState, useEffect } from 'react';
import Landing from './modules/landing';
import { Nav } from './modules/common';
import styles from './app.module.scss';
import './App.scss';

const App = () => {
  return (
    <div className={styles.navSpacer} >
      <Nav page='Landing' />
      <Landing/>
    </div>
  );
}

export default App;