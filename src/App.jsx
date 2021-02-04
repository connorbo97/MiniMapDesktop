import React, { useState, useEffect } from 'react';
import Landing from './modules/landing';
import CreateMap from './modules/create-map';
import { Nav } from './modules/common';
import styles from './app.module.scss';
import './App.scss';

const App = () => {
  let Component;
  let page;
  const loc = location.hash.substr(1);

  switch(loc) {
    case 'CreateMap':
      Component = CreateMap;
      page = 'CreateMap';
      break;
    default:
      Component = Landing;
      page = 'Landing';
  }

  console.log(loc, page);
  return (
    <div className={styles.navSpacer} >
      <Nav page={page} />
      <Component />
    </div>
  );
}

export default App;