import React from 'react';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
	display:flex;
	justify-content:center;
	padding-top: 20px;
	padding-bottom: 50px;
`;

export default function Image(props) {
	const {image} = props

	return (
		<StyledDiv>
			<img src={image}/>
		</StyledDiv>
	)
}