import React from 'react';
import Components from '../../../components/Components';
import floodFill from './resolver';

const FloodFill: React.FC = () => {
	return (
		<Components.CommonProblemIO
			inputLabels={['image', 'sr', 'sc', 'newColor']}
			onClickCallback={floodFill}
		/>
	);
};

export default FloodFill;
