import { Song,ISong } from './models'
import type { NextApiRequest, NextApiResponse } from 'next'
import database from './database'
const mongoose=require('mongoose')

type Data = {
  data:ISong[],
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | {error:unknown}>
) {
  
  try{
    database()
    const {index}=req.query
    let songs=await Song.find({indexOfSong:String(index)},'-_id')
    return res.status(200).json({ data: songs})
  }
  catch (e:unknown){
    console.log({error:e})
    return res.status(500).json({error:e})
}
}