// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const currentConditions = document.querySelector('#current-conditions');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

const url =
  'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=111.79&appid=7b0075e0d84601ad686fd9a9b87accbc&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  currentConditions.innerHTML = `${data.weather[0].main}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}
