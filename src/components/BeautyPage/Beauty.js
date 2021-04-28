import React from 'react';
// import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import { IMAGES } from './images'
import './Beauty.css';

function Beauty () {

  return (
    <>
      <div id="mC">
        <h1>Beauty</h1>
      </div>
      <Gallery images={IMAGES}/>
    </>
  );
}

export default Beauty;