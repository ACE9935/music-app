import { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useAppSelector,useAppDispatch } from "../app-state/app-hooks";
import {nextSong, play, stop} from "../app-state/app-state"
import { useState } from "react";

function SongPlayer() {
    const dispatch=useAppDispatch()
    const {song}=useAppSelector(selectSong=>selectSong)
    const [indexS,setIndexS]=useState(song.indexOfSong)
    useEffect(()=>{
       const audio=document.querySelector('audio') as HTMLAudioElement
       audio.src=song.url
    },[song.url])
    
    return ( 
        <AudioPlayer
        volume={0.5}
        src={song.url}
        autoPlay
      style={{background:'none',boxShadow:'none',width:'23rem' }}
      onPlay={(e) => console.log("onPlay")}
      showSkipControls={true}
      onClickNext={()=>
      dispatch(nextSong(Number(song.indexOfSong)+1))}
      onClickPrevious={()=>
        dispatch(nextSong(Number(song.indexOfSong)-1))}
      onEnded={()=>dispatch(stop())}
    />
     );
}

export default SongPlayer;