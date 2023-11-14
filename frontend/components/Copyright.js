import React from 'react';

export default function Copyright(props) {
	const { copyright } = props;

	return <p>&copy;{copyright}</p>;
}