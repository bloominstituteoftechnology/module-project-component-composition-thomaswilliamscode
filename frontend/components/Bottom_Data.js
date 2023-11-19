import React from 'react';

import Date from './Date';
import Copyright from './Copyright';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
	display:flex;
	justify-content:center;
	padding-top: 70px;
	padding-bottom: 50px;
`;

export default function BottomData(props) {
	const { copyright, date } = props;

	return (
		<StyledDiv>
			<Copyright copyright={copyright}/>
			<Date date={date}/>
		</StyledDiv>
	)
}