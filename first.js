const apiKey = "0d2e74a4bbdcb5941c4b8441d7463bfb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let weather = document.querySelector(".weather_image");
let temprature = document.querySelector("#temprature");
let city = document.querySelector(".city");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let weather_in_text = document.querySelector(".weather_in_text");
let input_box = document.querySelector(".input_box");
let search_btn = document.querySelector(".search_btn");
let wind_for_visibility = document.querySelector(".wind");
let humidity_for_visibility = document.querySelector(".humidity");
let error = document.querySelector(".error");

async function checkWeather(cityy){
    const response = await fetch(apiUrl + cityy + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        error.style.display = "block";
        weather.style.display = "none";
        temprature.style.display = "none";
        city.style.display = "none";
        humidity.style.display = "none";
        wind.style.display = "none";
        weather_in_text.style.display = "none";
        wind_for_visibility.style.display = "none";
        humidity_for_visibility.style.display = "none";

    }else{
        city.innerHTML = data.name;
        temprature.innerHTML = Math.round(data.main.temp) + "°C";
        humidity.innerHTML = data.main.humidity + " " + "%";
        wind.innerHTML = data.wind.speed + " " + "Km/h";
        weather_in_text.innerHTML = "(" + data.weather[0].main + ")";

        if(data.weather[0].main == "Rain"){
            weather.src = "images/rain.png"
        }
        if(data.weather[0].main == "Clouds"){
            weather.src = "images/cloudy.jpg"
        }
        if(data.weather[0].main == "Drizzle"){
            weather.src = "images/drizzle.png"
        }
        if(data.weather[0].main == "Clear"){
            weather.src = "images/sun.png"
        }
        if(data.weather[0].main == "Mist"){
            weather.src = "images/mist.png"
        }
        if(data.weather[0].main == "Rain"){
            weather.src = "images/rain.png"
        }
        if(data.weather[0].main == "Rain"){
            weather.src = "images/rain.png"
        }
        if(data.weather[0].main == "Haze"){
            weather.src = "images/haze.png"
        }
        wind_for_visibility.style.display = "block";
        humidity_for_visibility.style.display = "block";
        weather.style.display = "block";
        error.style.display = "none";
        weather.style.display = "block";
        temprature.style.display = "block";
        city.style.display = "block";
        humidity.style.display = "block";
        wind.style.display = "block";
        weather_in_text.style.display = "block";
        wind_for_visibility.style.display = "block";
        humidity_for_visibility.style.display = "block";
    }
}
function submitCityName(){
  
   let cityName = input_box.value;
   checkWeather(cityName);
}

search_btn.addEventListener("click", submitCityName);



