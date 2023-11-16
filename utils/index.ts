export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '14a6249c27msh985b1b41fe55a87p1cdf67jsnb4862f1427ec',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    });

    const result = await response.json();

    return result
}