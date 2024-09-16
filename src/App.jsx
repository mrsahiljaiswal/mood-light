import { useState } from 'react'
import './App.css'
import Button from "./Component/Button"
function App() {
  
  const [color , setColor]=useState("#3c3c3c");
  
  return (
   
    <div className='background' style={{backgroundColor:color}}>

      <div className="btn-container">
          <Button setColor={setColor} name="black"/>
          <Button setColor={setColor} name="white"/>
          <Button setColor={setColor} name="yellow"/>
          <Button setColor={setColor} name="red"/>
          <Button setColor={setColor} name="purple"/>
          <Button setColor={setColor} name="green"/>
          <Button setColor={setColor} name="blue"/>
          <Button setColor={setColor} name="olive"/>
          <Button setColor={setColor} name="gray"/>
          <Button setColor={setColor} name="pink"/>
          <Button setColor={setColor} name="lavender"/>
      </div>
      
    </div>
    

  
  )
}

export default App
