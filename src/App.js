import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {APP_LOAD} from './Redux/Actions/appLoadAction'
function App() {
  
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(APP_LOAD());
  }, []);
  
  // const isFreeda = useSelector((state) => state.isFreeda);
  return (
    <div className="App">
      hello data is coming check using Redux-devtools extension .
    </div>
  );
}

export default App;
