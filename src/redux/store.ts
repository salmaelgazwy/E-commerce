import { configureStore } from '@reduxjs/toolkit'
import { counterreducer } from './slices/counterSlice'
export const store=configureStore({
    reducer:{
        counter:counterreducer
    }

})
export type Rootstate=ReturnType<typeof store.getState>
export type AppDispatcher=typeof store.dispatch