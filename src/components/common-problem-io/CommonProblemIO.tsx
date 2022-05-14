import React, { useRef, useState } from 'react';

type Props<T> = {
	inputLabels: string[];
	onClickCallback: T;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CommonProblemIO = <T extends (...args: any) => any>({
	inputLabels,
	onClickCallback,
}: Props<T>): JSX.Element => {
	const numsInputs: React.RefObject<HTMLInputElement>[] = [];
	const [result, setResult] = useState('');

	inputLabels.forEach(() => numsInputs.push(useRef(null)));

	const handleRun = () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const inputsData: any[] = [];
		numsInputs.forEach((input, index) => {
			inputsData.push(JSON.parse(input?.current?.value || ''));
			console.log(`${inputLabels[index]}: ${inputsData[index]}`);
		});
		console.log(inputsData);
		setResult(JSON.stringify(onClickCallback(...inputsData)));
	};

	return (
		<div>
			{inputLabels.map((label, index) => (
				<React.Fragment key={label}>
					<div>{label}</div>
					<input type='text' ref={numsInputs[index]} />
				</React.Fragment>
			))}
			<button onClick={handleRun}>Run</button>
			<div>Result: {result}</div>
		</div>
	);
};

export default CommonProblemIO;
