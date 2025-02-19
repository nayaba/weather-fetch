const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL=`http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

const show = async (formData) => {
    try {
        const queryString = `&q=${formData}`
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

export {
    show,
}