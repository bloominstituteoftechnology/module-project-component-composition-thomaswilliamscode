import React, { useState, useEffect } from 'react'
import axios from 'axios'


import Title from '../Title'
import Explanation from '../Explanation';
import Image from '../Image'
import BottomData from '../Bottom_Data'


import { BASE_URL, API_KEY } from '../constants/constants'

function App() {
// state
  const [data, setData] = useState([]);
  
  

  // useEffect
  useEffect(() => {
		axios
			.get(`${BASE_URL}?api_key=${API_KEY}`)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);


  // return 
  return (
		<div>
			<Title title={data.title} />
			<Image image={data.hdurl} />
			<Explanation explanation={data.explanation} />
      <BottomData date={data.date} copyright={data.copyright}/>
		</div>
	);
}

export default App
