
import React from "react";
import './../styles/App.css';

const App = () => {
   let [count, setCount]=useState(0);
   function addCount(){
        setCount(count+1)
   }
  return (
    <div>
      <p>Button clicked {count} times</p>
      <button onClick={addCount}>Click me</button>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
