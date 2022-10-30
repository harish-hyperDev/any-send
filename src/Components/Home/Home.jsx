// import React from 'react';
import React, { useState, useEffect } from 'react';

function Home() {
  const [lobbyNum, setLobbyNum] = useState();
  

  return (
    <>
      {
        lobbyNum 
          ? <div className='ml-[40%] mt-[20%] w-max border ring-offset-4 ring-2 ring-slate-900'>hello {lobbyNum}</div>
          : <div>
              <div className='ml-[40%] mt-[20%] w-max border ring-offset-4 ring-2 ring-slate-900'>Create New Lobby</div>
              <div onClick={() => {setLobbyNum(Math.floor(Math.random() * 10000000000)); console.log("hello")} }className='ml-[40%] mt-4 w-max border ring-offset-4 ring-2 ring-slate-900'>Join Lobby</div>
            </div>
      }
    </>
  )
}

export default Home