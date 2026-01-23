export async function getWeather(long,lat) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m,precipitation`)
        const data = await response.json()
        
        return data
    } catch (error) {
        console.error(error);
    }
}

