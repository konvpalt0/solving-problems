import React from 'react';
import Components from '../../../components/Components';
import numIslands from './resolver';

const NumberOfIslands: React.FC = () => {
	return (
		<Components.CommonProblemIO
			inputLabels={['grid']}
			onClickCallback={numIslands}
		/>
	);
};

export default NumberOfIslands;
