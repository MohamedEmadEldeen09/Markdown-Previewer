import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followChange, setScreen } from '../reduxStore/markDownSlice'


function Editor({fullScreen}) {
  
  const dispatch = useDispatch()
     
  let handleChange = (e)=>{
    dispatch(followChange(e.target.value))
  }

  let handleEScreen = ()=>{
    dispatch(setScreen('for-editor'))
  }
  return (
    <div className='editor' id='editor-container'>
        <header className='header'>
           <div className='title'>
           <i className='bx bxs-cog'></i>
            <h3>Editor</h3>
           </div>
           <div className='maxmin'>
            
            {
            !fullScreen ? <button href='#' className='btn-icon' 
                          onClick={handleEScreen}><span  
                          className="material-symbols-outlined">
                            fullscreen
                          </span></button> :
                          <button href='#' className='btn-icon' 
                            onClick={handleEScreen}><span  
                            className="material-symbols-outlined">
                            close_fullscreen
                          </span></button>
             }
           </div>
        </header>
        <main className='main'>
           <textarea className='textarea' id="editor" onChange={handleChange} />             
        </main>
    </div>
  )
}

export default Editor

