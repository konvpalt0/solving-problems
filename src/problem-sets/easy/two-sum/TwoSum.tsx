import React, {useRef, useState} from "react";

function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  let result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i];
    if (map.has(remainder)) {
      result = [i, map.get(remainder)];
      break;
    } else {
      map.set(nums[i], i);
    }
  }

  return result;
}

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