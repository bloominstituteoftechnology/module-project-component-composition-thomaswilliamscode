import React from 'react';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
	width:100%;
`

const StyledP = Styled.p`
	display:flex;
	justify-content:center;
	padding-left:200px;
	padding-right: 200px;
`;

export default function Explanation(props) {
	const {explanation} = props

	return (
		<div>
			<StyledP>{explanation}</StyledP>
		</div>
	);

}
