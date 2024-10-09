
const apiKey = 'e68750d3d1690cae3a5e77daf9e25f72'
async function city() {

    try {

        const pokemonName = document.getElementById('cityName').value.toLowerCase();
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${pokemonName}&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        // console.log(response)
        if (!response.ok) {
            throw new Error("Not Found");
        }
        const data = await response.json();
        const cardTitle = document.getElementById('title');
        const cardTemp = document.getElementById('temperature');
        const tempData = data.main.temp;
        cardTemp.textContent = `${(tempData - 273.15).toFixed()} C`;
        cardTitle.textContent = data.weather[0].description;
        // console.log(data)
    }
    catch (error) {
        const cardTitle = document.getElementById('title')
        cardTitle.textContent = error.message
    }
}