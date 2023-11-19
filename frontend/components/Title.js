import React from 'react'
import Styled from 'styled-components'


const StyledTitle = Styled.h1`
	display:flex;
	justify-content:center;
`

export default function Title (props) {
	const { title } = props
	return (
		<StyledTitle>{title}</StyledTitle>
	)
}