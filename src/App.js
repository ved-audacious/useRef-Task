import { useRef } from "react";

function App() {

const userefm=useRef(null)

const userefD1=useRef(null)
const userefD2=useRef(null)
const colChngHandler=()=>{
  userefD1.current.style.backgroundColor="blue"
  userefD2.current.style.backgroundColor="red"

}

  return (

    <div>
    <div ref={userefm} >My First Div</div>
    <div ref={userefm}>My Second Div </div>
    <div ref={userefm}> My Third Div</div>
    <div>
  <button onClick={()=>{userefm.current.style.backgroundColor="Green"}}>ChangeColor</button>
  </div>

  {}
  

   <div ref={userefD1} >My First Div</div>
   <div ref={userefD2}>My Second Div </div>
   <button onClick={colChngHandler}>ChangeColorBT2</button>




   </div>
  );
}

export default App;
