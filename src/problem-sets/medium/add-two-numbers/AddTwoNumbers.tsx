import React from 'react';
import Components from '../../../components/Components';
import addTwoNumbers, { listNodeFabric } from './resolver';

const AddTwoNumbers: React.FC = () => {
	return (
		<Components.CommonProblemIO
			inputLabels={['linked list 1', 'linked list 2']}
			onClickCallback={(l1: number[], l2: number[]) =>
				addTwoNumbers(listNodeFabric(l1), listNodeFabric(l2))
			}
		/>
	);
};

export default AddTwoNumbers;
