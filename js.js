fetch('http://api.openweathermap.org/data/2.5/weather?q=Mogilev&lang=ru&appid=d1668227f15aa7f6dec0c339b8d8dfa8')
    .then(function(resp) { return resp.json()})
    .then(function(data){
        console.log(data);
        document.querySelector('.city').textContent=data.name;
        document.querySelector('.temp').innerHTML='+'+Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.temp2').innerHTML='Ощущается как'+' '+'+'+Math.round(data.main.feels_like - 273) + '&deg;';
        document.querySelector('.pressure').innerHTML='Давление'+' '+Math.round(data.main.pressure / 1.333) + ' ' + 'мм рт.ст.';
        document.querySelector('.humidity').innerHTML='Влажность'+' '+Math.round(data.main.humidity) + ' ' + '%';
        document.querySelector('.picture ').innerHTML=`<img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.weather').textContent=data.weather[0].description;
        document.querySelector('.wind').textContent='Ветер'+' '+data.wind.speed+' '+'м/с';
    })
    .catch(function(){

    });