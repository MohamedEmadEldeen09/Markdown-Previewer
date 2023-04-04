
import { configureStore } from '@reduxjs/toolkit'
import markReducer from './markDownSlice'

export const store = configureStore({
    reducer : {
        markDown : markReducer
    }
})