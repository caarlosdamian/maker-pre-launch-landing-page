/* eslint-disable */
import React from 'react';
import { Header } from './sections/header/Header';
import './App.scss';
import { GridContainer } from './sections/gridContainer/GridContainer';
import { Subcription } from './sections/subcription/Subcription';

function App() {
  return (
    <main className="App">
      <Header />
      <GridContainer />
      <Subcription />
    </main>
  );
}
export default App;
