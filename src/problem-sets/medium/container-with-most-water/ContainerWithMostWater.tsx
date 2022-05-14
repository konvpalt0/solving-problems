import React from 'react';
import { resolver } from './resolver';
import Components from '../../../components/Components';

const ContainerWithMostWater: React.FC = () => {
	return (
		<Components.CommonProblemIO
			inputLabels={['height']}
			onClickCallback={resolver}
		/>
	);
};

export default React.memo(ContainerWithMostWater);
