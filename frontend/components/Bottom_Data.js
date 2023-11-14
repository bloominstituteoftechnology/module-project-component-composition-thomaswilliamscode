import React from 'react';

import Date from './Date';
import Copyright from './Copyright';

export default function BottomData(props) {
	const { copyright, date } = props;

	return (
		<div>
			<Copyright copyright={copyright}/>
			<Date date={date}/>
		</div>
	)
}