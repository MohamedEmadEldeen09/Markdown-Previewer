import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { useSelector } from 'react-redux';

export default function App() {
  const fullScreen = useSelector(state=>state.markDown.fullScreen)
   
  return (
    <div className="container">
       <Editor fullScreen={fullScreen}/>
       <Previewer fullScreen={fullScreen}/>
    </div> 
  );
}


