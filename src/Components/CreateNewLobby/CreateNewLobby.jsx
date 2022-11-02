import React, { useCallback, useEffect, useState } from 'react'
// import io from 'socket.io-client'
import axios from 'axios';

function CreateNewLobby() {

  const [lobbyNum, setLobbyNum] = useState();

  /* const getLobbyNum = useCallback(() => {
    console.log("callback ran")
  }, []) */

  useEffect(() => {
    axios.get('http://cool.cloudns.nz:4050/create-lobby')
          .then(res => res.data)
          .then(data => {
            if(data.lobbyNum)
              setLobbyNum(data.lobbyNum)
          })
  },[])

  return (
    <>
      <div className='ml-[40%] mt-[20%] w-max border ring-offset-4 ring-2 ring-slate-900'>hello Lobby</div>
      {
        lobbyNum ? <div>{lobbyNum}</div> : null
      }
    </>
  )
}

export default CreateNewLobby