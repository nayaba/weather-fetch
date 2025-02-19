
import * as weatherService from './services/weatherService'
import { useState, useEffect } from 'react'
import WeatherSearch from './components/WeatherSearch'
import Navbar from './components/Navbar'

const App = () => {
	const [weather, setWeather] = useState({})
	const [loading, setLoading] = useState(true)

	const fetchData = async (formData) => {
		const data = await weatherService.show(formData)
		setWeather(data)
		setLoading(false)
	}

	useEffect(() => {
		fetchData('New York')
	}, [])

	return (
		<>
			<Navbar fetchData={fetchData} />
			<h1>Weather API</h1>
			{/* <button onClick={fetchData}>Fetch Weather Data</button> */}
			{/* <WeatherSearch fetchData={fetchData} /> */}
			<hr />
			{loading ? (
				'Loading...'
			) : (
				<div>
					<h3>{weather.location?.name}</h3>
					<img
						src={weather.current?.condition.icon}
						alt={weather.current?.condition.icon}
					/>
				</div>
			)}
		</>
	)
}

export default App
