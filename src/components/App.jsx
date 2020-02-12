import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import CropSchedule from './CropSchedule';
import Bio from './Bio';
import './App.css';


function App(){
  return (


    <div>

      <Header/>

      <div className="marketScheduleStyle">
        <MarketSchedule/>
      </div>
      <div className="cropScheduleStyle">
        <CropSchedule/>
      </div>
      <div className="bioStyle">
        <Bio/>
      </div>

      <style jsx>{`

      .marketScheduleStyle {
        position: absolute;
        top: 15vh;
        left: 5%;
        width: 30%;
      }

      .cropScheduleStyle {
        position: absolute;
        left: 40%;
        top: 15vh;
        width: 30%;
      }

      .bioStyle {
        position: absolute;
        top: 15vh;
        left: 75%;
        width: 25%;
        height: 80vh;
      }

      `}</style>

    </div>
  );
}

export default App;
