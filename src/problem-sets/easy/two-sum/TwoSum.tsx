import React from 'react';
import { main } from './main';
import Components from '../../../components/Components';

const TwoSum: React.FC = () => {
	return (
		<Components.CommonProblemIO
			inputLabels={['number =', 'target =']}
			onClickCallback={main}
		/>
	);
};

export default React.memo(TwoSum);
