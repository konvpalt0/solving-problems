import React from 'react';
import { reverse } from './reverse';
import Components from '../../../components/Components';

const ReverseInteger: React.FC = () => {
	return (
		<Components.CommonProblemIO
			inputLabels={['x:']}
			onClickCallback={reverse}
		/>
	);
};

export default React.memo(ReverseInteger);
