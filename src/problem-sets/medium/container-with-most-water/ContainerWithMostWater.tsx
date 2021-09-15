import React, {useRef, useState} from "react";
import {maxArea} from "./maxArea";

const ContainerWithMostWater: React.FC = () => {
  const numsInput = useRef<any>(null);
  const [result, setResult] = useState('');
  const handleRun = () => {
    const height = JSON.parse(numsInput.current.value);
    console.log(`height: ${height}`);
    setResult(JSON.stringify(maxArea(height)));
  }
  return (
    <div>
      <div>height =</div>
      <input type="text" ref={numsInput}/>
      <button onClick={handleRun}>Run</button>
      <div>Result: {result}</div>
    </div>
  )
}

export default React.memo(ContainerWithMostWater);