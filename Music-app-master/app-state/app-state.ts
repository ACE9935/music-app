import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'
import type {RootState} from './app-store'

// Define a type for the slice state
export interface SongState {
  playing: boolean
  background:string,
  url:string,
  indexOfSong:string,
  title:string | null,
  artist:string | null,
  duration:string | null
}

// Define the initial state using that type
const initialState: SongState = {
  playing: false,
  indexOfSong:'0',
  background:'',
  url:'',
  title:null,
  artist:null,
  duration:null
}

export const nextSong = createAsyncThunk(
  'next/song',
  async function(indexS:number){
    try {
    const res = await fetch(`/api/selectSong?index=${indexS}`);
    return await res.json();
    }
    catch (err) {
    console.log(err);
    return null
    }
    }
)

export const songSlice = createSlice({
  name: 'song',
  initialState,
  reducers: {
    play: (state,action):SongState=>({...action.payload,playing:true}),
    stop:state=>initialState
  },
  extraReducers:(builder)=>{
    builder.addCase(nextSong.pending,(state,action)=>{
        return state
    }).addCase(nextSong.fulfilled,(state,action)=>{
       if(action.payload.data.length==0) return state
         return {...action.payload.data[0],playing:true}
    }).addCase(nextSong.rejected,(state,action)=>{
        return state
    })
}})

export const { play,stop } = songSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectSong = (state: RootState) => state.song

export default songSlice.reducer