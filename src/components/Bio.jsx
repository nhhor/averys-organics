import React from 'react';

function Bio(){
  return (
    <div className='bioClass'>

      <h2 className='bioHeader'>About Us</h2>
      <p className='bioText'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah!</p>
      <style jsx>{`
      .bioClass {
        background-color: rgba(166, 250, 118, .3);
        border-radius: 25px;
        height: 100%;


      }

      .bioHeader{
        text-align: center;
        padding: 20px;
        border-bottom: 1px solid lightgrey;
      }

      .bioText{
        text-align: center;
        padding: 20px;
      }

      `}</style>
    </div>
  );
}




export default Bio;
