import mongoose, { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface ISong {
  url: string;
  background: string;
  title: string;
  artist:string;
  duration:string;
  indexOfSong:string;
}

// 2. Create a Schema corresponding to the document interface.
const songSchema = new Schema<ISong>({
  url: { type: String, required: true },
  background: { type: String, required: true },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: String, required: true },
  indexOfSong: { type: String, required: true }
});

// 3. Create a Model.
export const Song =mongoose.models.song || model<ISong>('song', songSchema);