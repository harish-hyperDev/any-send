// import React from 'react';
import React, { useState } from 'react';
// import JoinLobby from '../JoinLobby/JoinLobby';
import CreateNewLobby from '../CreateNewLobby/CreateNewLobby';
/* import io from 'socket.io-client'
import axios from 'axios'; */

function Home() {
  const [lobbyCreated, setLobbyCreated] = useState(false);


  {/* <div className='ml-[40%] mt-[20%] w-max border ring-offset-4 ring-2 ring-slate-900'>hello {lobbyNum}</div> */}

  return (
    <>
      {
        lobbyCreated 
          ? <CreateNewLobby /> 
          : <div>
              <div 
                onClick={() => { setLobbyCreated(true) }} 
                className='ml-[40%] mt-[20%] w-max border ring-offset-4 ring-2 ring-slate-900 shadow-xl'>
                  Create New Lobby
              </div>
              <div className='ml-[40%] mt-4 w-max border ring-offset-4 ring-2 ring-slate-900'>Join Lobby</div>
            </div>
      }
    </>
  )
}

export default Home