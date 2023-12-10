// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weather-caption');

const date = document.querySelector('#dateTime');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const icon = document.querySelector('#forecastIcon');
const weatherDesc = document.querySelector('.weather-caption');

const url =
  'https://api.openweathermap.org/data/2.5/weather?lat=43.82&lon=111.79&appid=4f95f54f9f3274981432648406c80731&units=imperial';
const forecasturl =
  'https://api.openweathermap.org/data/2.5/forecast?lat=43.82&lon=111.79&appid=4f95f54f9f3274981432648406c80731&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  const rounded_temp = Math.round(data.main.temp);
  currentTemp.innerHTML = `${rounded_temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].main;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function showForecast(forecastList) {
  const forecastContainer = document.querySelector('#forecast');

  // Get the current date
  const currentDate = new Date();

  // Declare uniqueEntries object to store unique entries for each day
  const uniqueEntries = {};

  // Filter forecast entries for the next three days, excluding the current day
  const next3DaysForecast = forecastList.filter((entry) => {
    const entryDate = new Date(entry.dt_txt);
    const daysDifference = Math.floor(
      (entryDate - currentDate) / (1000 * 60 * 60 * 24)
    );

    // Include entries within the next three days, excluding today
    return daysDifference > 0 && daysDifference <= 3;
  });

  next3DaysForecast.forEach((forecast, index) => {
    const forecastDate = new Date(forecast.dt_txt);

    // Format the date as "Friday December 8"
    const formattedDate = forecastDate.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    });

    // Check if an entry for this day has already been added
    if (!uniqueEntries[formattedDate]) {
      const roundMax = Math.round(forecast.main.temp_max);
      const roundMin = Math.round(forecast.main.temp_min);
      const srcIcon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
      const description = forecast.weather[0].description;

      // Create forecast elements
      const forecastItem = document.createElement('div');
      forecastItem.classList.add('forecast-item');
      forecastItem.innerHTML = `
        <h3 class="forecast-date">${formattedDate}</h3>
        <img class="forecast-icon" src="${srcIcon}" alt="${description}">
        <p class="forecast-desc">${description}</p>
        <p class="forecast-tempH">${roundMax}&deg;F - ${roundMin}&deg;F</p>
      `;

      // Append forecast item to the container
      forecastContainer.appendChild(forecastItem);

      // Mark this day as processed
      uniqueEntries[formattedDate] = true;
    }
  });
}

// ...

async function forecast() {
  const forecastContainer = document.querySelector('#forecast');

  try {
    const response = await fetch(forecasturl);
    if (response.ok) {
      const data2 = await response.json();
      showForecast(data2.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

forecast();
