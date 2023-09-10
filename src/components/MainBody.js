import React from 'react';
import uwu from './uwu.bmp';

function MainBody() {
  return (
    <div className='MainBody'>
      <button id="click">click on me O-O</button>
      <br></br>
      <img src={uwu} alt="A cute image" id="cat" />
    </div>
  );
}



export default MainBody;

