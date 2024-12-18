import { useEffect } from "react";
import { useState } from "react"

function App() {
 const [count,setCount]=useState(0);
 const [count2,setCount2]=useState(0);
 const handleclick =()=>{
    setCount(count+1);
 }
 const handleclick2 =()=>{
  setCount2(count2+1);
}
 useEffect(()=>{

  document.title=`${count} and ${count2} messages found`
 },[count,count2])
  return (
    <>
    <div className="container mt-5 w-100 h-100 flex justify-content-center">
    <button onClick={handleclick} className="btn btn-dark mx-auto">Count is {count}</button>
    <br /><br />
    <button onClick={handleclick2} className="btn btn-primary mx-auto">Count is {count2}</button>
    
    </div>
    </>
  )
}

export default App
