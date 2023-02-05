const API_KEY = "5e6bc646cf3e1e904b645f946c836c5b";

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const cityContainer = document.querySelector("#weather span:last-child");
      cityContainer.innerHTML = data.name;
      weatherContainer.innerHTML = data.weather[0].main;
    });
};

const onGeoError = () => {
  alert("Can't find you. No weather for you");
};

const a = navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
