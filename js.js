fetch('http://api.openweathermap.org/data/2.5/weather?q=Mogilev&lang=ru&appid=d1668227f15aa7f6dec0c339b8d8dfa8')
    .then(function(resp) { return resp.json()})
    .then(function(data){
        console.log(data);
        document.querySelector('.package-name').textContent=data.name;
        document.querySelector('.price').innerHTML='+'+Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.price2').innerHTML=Math.round(data.main.feels_like - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent=data.weather[0].description;
        document.querySelector('.features ').innerHTML='<img src="http://openweathermap.org/img/wn/03d@2x.png">'
        document.querySelector('.wind').textContent=data.wind.speed+' '+'м/с';
    })
    .catch(function(){

    });