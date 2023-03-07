export async function getCoordsFromAddress(address) {
    const response = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key= `)
    if (!response.ok) {
        throw new Error('Failed to fetch coordinates. Please try again!')
    }
    const data = await response.json()
    if (data.error_message) {
        throw new Error(data.error_message)
    }
    // console.log(data);
    const coordinates = data.results[0].location
    return coordinates
}