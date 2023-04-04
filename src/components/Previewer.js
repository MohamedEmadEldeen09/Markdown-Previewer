import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setScreen } from '../reduxStore/markDownSlice'
import { marked } from 'marked'

function Previewer({fullScreen }) {
  const text = useSelector(state => state.markDown.text)
  const markedDown = marked(text , {breaks : true})
  const dispatch = useDispatch()
  let handlePScreen = ()=>{
    dispatch(setScreen('for-previewer'))
  }

  return (
    <div className='editor' id='preview-container'>
        <header className='header'>
           <div className='title'>
           <i className='bx bx-book-reader'></i>
            <h3>Previwer</h3>
           </div>
           <div className='maxmin'>
           {
            !fullScreen ? <button href='#' onClick={handlePScreen} 
                           className='btn-icon'><span className="material-symbols-outlined">                            
                            fullscreen
                          </span></button> :
                          <button href='#' onClick={handlePScreen}  
                          className='btn-icon'><span className="material-symbols-outlined">                        
                            close_fullscreen
                          </span></button>
             }
           </div>
        </header>
        <main className='main'>
           <div className='textarea' id="preview" dangerouslySetInnerHTML={{__html:markedDown}}></div>                   
        </main>
    </div>
  )
}

export default Previewer