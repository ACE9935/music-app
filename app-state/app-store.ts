import { configureStore } from '@reduxjs/toolkit'
import songReducer from './app-state'

export const store = configureStore({
  reducer: {
    song:songReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch