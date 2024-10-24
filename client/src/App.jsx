import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAPIStatus } from './services/api';

function Home(){
  const [status, setStatus] = useState('');
  useEffect(()=>{
    getAPIStatus().then(setStatus);
  })
  return (<h1 className='text-3xl font-bold'>{status}</h1>)
}

const App = () => {
  return (
   
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Home />
    </div>
   
  )
}

export default App