const form = document.getElementById("form");
const search = document.getElementById("search");
const defaultCity = 'Mogilev';
const Utl = 'http://api.openweathermap.org/data/2.5/weather';
const currDate = new Date();
console.log(currDate);

const KEY = '&appid=d1668227f15aa7f6dec0c339b8d8dfa8';
const Url = 'http://api.openweathermap.org/data/2.5/weather';
const searchUrl='http://api.openweathermap.org/data/2.5/forecast';
const insertIcon = (iconCipher) => `<img src="https://openweathermap.org/img/wn/${iconCipher}@2x.png">`;

const forecast = document.querySelector('.showforecast');
const cityNameElement = document.querySelector('.city');
const tempEl = document.querySelector('.temp');
const windEl = document.querySelector('.wind');
const iconEl = document.querySelector('.icon');
const temp2El = document.querySelector('.temp2');
const pressureEl = document.querySelector('.pressure');
const city = document.querySelector('.city');
const humidityEl = document.querySelector('.humidity');
const weatherEl = document.querySelector('.weather');
var x = document.getElementById("contain");


fetch(`${Url}?q=${defaultCity}&lang=ru&units=metric${KEY}`)
    .then(function(resp) { return resp.json()})
    .then(function(data){
        console.log(data);
        city.textContent=data.name; 
        pressureEl.innerHTML = 'Давление'+' '+Math.round(data.main.pressure / 1.333) + ' ' + 'мм рт.ст.';
        temp2El.innerHTML = 'Ощущается как:'+' '+'+'+Math.round(data.main.feels_like ) + '&deg;';
        tempEl.innerHTML = '+'+Math.round(data.main.temp) + '&deg';
        windEl.textContent = 'Ветер'+' '+data.wind.speed+' '+'м/с';  
        iconEl.innerHTML = insertIcon(data.weather[0]['icon']);
        humidityEl.innerHTML = 'Влажность'+' '+Math.round(data.main.humidity) + ' ' + '%';
        weatherEl.textContent = data.weather[0]['description'];
    })
    .catch(function(){

    });

    form.addEventListener("submit", (e) => {
        forecast.innerHTML = "";
        e.preventDefault();
        const searchTerm = search.value;
        fetch(`${searchUrl}?q=${searchTerm}&lang=ru&units=metric&day=5${KEY}`)
            .then(function(resp) { return resp.json() })
            .then(function(respData) {
                console.log(respData);
                const il = document.createElement
                ("ul");
                il.classList.add('il');
                document.querySelector('.showforecast').appendChild(il);
                respData.list.forEach((element) => {
                    const {main:{temp}, weather:{0: {description, icon}}, dt_txt} = element;
                    const dateAPI = new Date(dt_txt);
                    if(dateAPI.getHours() == 15){
                        const dayArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    
                        const forecastEl = document.createElement
                        ("li");
                        forecastEl.classList.add("weatherDaily");
                        forecastEl.innerHTML = `
                                <span>${dayArray[dateAPI.getDay()]}</span>
                                <img
                                    src="https://openweathermap.org/img/wn/${icon}@2x.png"
                                >
                                <div class="weather-info">
                                    <h3>+${Math.round(temp)}&deg;</h3>
                                    <span>${description}</span>
                                </div>
                        `;
    
                        document.querySelector('.il').appendChild(forecastEl);
                    }
                });
            })
            .catch(function(){
            });
        if (searchTerm) {
            search.value = "";
        }
    
    }); 
    
var x = document.getElementById("contain");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav");
  element.classList.toggle("open");
  
  x.classList.toggle("change");
}

