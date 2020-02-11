import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import CropSchedule from './CropSchedule';
import Bio from './Bio';

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
        width: 35%;
      }

      .cropScheduleStyle {
        position: absolute;
        left: 38%;
        top: 15vh;
        width: 35%;
      }

      .bioStyle {
        position: absolute;
        top: 15vh;
        left: 75%;
        width: 25%;
        height: 100vh;
      }
      `}</style>

    </div>
  );
}

export default App;
