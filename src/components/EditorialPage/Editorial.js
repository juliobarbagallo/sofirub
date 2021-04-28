import React from 'react';
// import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import { IMAGES } from './images'
import './Editorial.css';

function Editorial () {

  return (
    <>
      <div id="mC">
        <h1>Editorial</h1>
      </div>
      <Gallery images={IMAGES}/>
    </>
  );
}

export default Editorial;