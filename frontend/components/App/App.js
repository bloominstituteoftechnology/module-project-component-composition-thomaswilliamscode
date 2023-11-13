import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { BASE_URL, API_KEY } from '../constants/constants'

function App() {
// state
  const [data, setData] = useState([]);
  

  // useEffect
  useEffect(() => {
		axios
			.get(`${BASE_URL}?api_key=${API_KEY}`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);


  // return 
  return (
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
  )
}

export default App
