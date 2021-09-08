import React, {useRef, useState} from "react";
import {reverse} from "./reverse";

const ReverseInteger: React.FC = () => {
  const numsInput = useRef<any>(null);
  const [result, setResult] = useState('');
  const handleRun = () => {
    const x = JSON.parse(numsInput.current.value);
    console.log(`x: ${x}`);
    setResult(JSON.stringify(reverse(x)));
  }
  return (
    <div>
      <div>x =</div>
      <input type="text" ref={numsInput}/>
      <button onClick={handleRun}>Run</button>
      <div>Result: {result}</div>
    </div>
  )
}

export default React.memo(ReverseInteger);