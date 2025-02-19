import { useState } from 'react'

const WeatherSearch = (props) => {

    const [formData, setFormData] = useState('')

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.fetchData(formData)
        setFormData('')
    }

    return (
        // <>
        //     <h2>Search</h2>
            // bootstrap additions 👇
            <form onSubmit={handleSubmit} className="d-flex" role="search">
                {/* <label>Enter a city: </label> */}
                <input 
                type="search" 
                value={formData}
                onChange={handleChange}
                // bootstrap additions 👇
                className="form-control me-2 bg-light"
                placeholder="Search for a City"
                aria-label="Search"
                data-bs-theme="dark"
                />
                <button className='btn btn-outline-info' type="submit">Search</button>
            </form>
        // </>
    )
}

export default WeatherSearch