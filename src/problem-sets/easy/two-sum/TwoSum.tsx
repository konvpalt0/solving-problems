import React, {useRef, useState} from "react";
import {twoSum} from "./twoSum";

const TwoSum: React.FC = () => {
  const numsInput = useRef<any>(null);
  const targetInput = useRef<any>(null);
  const [result, setResult] = useState('');
  const handleRun = () => {
    const nums = JSON.parse(numsInput.current.value);
    const target = JSON.parse(targetInput.current.value);
    console.log(`nums: ${nums}`);
    console.log(`target: ${target}`);
    setResult(JSON.stringify(twoSum(nums, target)));
  }
  return (
    <div>
      <div>number =</div>
      <input type="text" ref={numsInput}/>
      <div>target =</div>
      <input type="number" ref={targetInput}/>
      <button onClick={handleRun}>Run</button>
      <div>Result: {result}</div>
    </div>
  )
}

export default React.memo(TwoSum);