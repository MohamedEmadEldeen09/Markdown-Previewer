import { createSlice } from "@reduxjs/toolkit";


const initState = {
    text : "",
    fullScreen : false
}
export const markdownSlice = createSlice({
    name:'markdown',
    initialState:initState,
    reducers:{
       followChange :(state , action)=>{
         state.text = action.payload
       },
       setScreen : (state , action)=>{
        if( state.fullScreen == false){
            if(action.payload == 'for-editor'){
                document.getElementById('preview-container').style.display = 'none'
            }
            if(action.payload == 'for-previewer'){
                document.getElementById('editor-container').style.display = 'none'
            }
            state.fullScreen = true
        }else{
            if(action.payload == 'for-editor'){
                document.getElementById('preview-container').style.display = 'block'
            }
            if(action.payload == 'for-previewer'){
                document.getElementById('editor-container').style.display = 'block'
            }
            state.fullScreen = false
        }
        
       }
    }
})

export const {followChange , setScreen} = markdownSlice.actions
export default markdownSlice.reducer