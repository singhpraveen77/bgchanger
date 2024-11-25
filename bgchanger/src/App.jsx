import { useState } from 'react'

// import './App.css'
import Red from './red'
import Orange from './orange'
import Black from './Black'
import Blue from './Blue'


function App() {

  let [color,setcolor]=useState('white');
  let [count,setcnt]=useState(0);
  function one(){
    // console.log("one");
    setcolor('red')
    
  }
  function two(){
    // console.log("one");
    setcolor('green')


  }
  function three(){
    // console.log("one");
    setcolor('black')


  }
  function four(){
    // console.log("one");
    setcolor('blue')


  }
  function rota(){
    let a=["green","red","yellow","blue"];
    setcolor(a[(count)%4])
    // console.log(count)
    setcnt(count+1)

  }


  return (
    <>
      <button onClick={one}> red </button>
      <button onClick={two}> orange</button>
      <button onClick={three}> black</button>
      <button onClick={four}>Blue</button>

      <button onClick={rota}>gola</button>

      <div style={{ backgroundColor: color, height: '50vh', width: '100vw' }}>
        {/* This div will change color based on the button clicked */}
      </div>
      <div style={{ backgroundColor: 'brown', height: '50vh', width: '100vw' }}>
        {/* This div will change color based on the button clicked */}
      </div>
      
    </>
  )
}

export default App
