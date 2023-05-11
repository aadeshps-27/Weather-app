function  findWeather() {
  PlaceName =inputbox.value
  console.log(PlaceName);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${PlaceName}&appid=f58045e3074d5651f958b6875f095c54`)
  .then(data=>data.json()).then(data=>displayData(data))
  if(PlaceName==""){
    alert("Input feild is Empty :{")
  }
}
function livelocation() {

  successCallback = (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${lon}&lat=${lat}&appid=f58045e3074d5651f958b6875f095c54`).then(data=>data.json()).then(data=>displayData(data))
      
      
  
  
  };

  
  navigator.geolocation.getCurrentPosition(successCallback);
}

function displayData(data){
  place=data.name
  sys = data.sys.country
  temperature =Math.round(data.main.temp-272.15)
  description=data.weather[0].description
  humidity=data.main.humidity
  mintemp=Math.round(data.main.temp_min-272)
  maxtemp=Math.round(data.main.temp_max-272)
  pressure=data.main.pressure
  feeltemp=Math.round(data.main.feels_like-272.15)
  windspeed=Math.round(data.wind.speed*3.5)
  logo=data.weather[0].main



 


  htmlData =`   <div class="container text-center ">
  <div class="row">
    <div class="col">

    </div>
    <div class="col-12 weatherDetails">
      <hr>
    <h2>Weather Details!</h2>
    <hr>
  
    
<span><img src="https://static.vecteezy.com/system/resources/thumbnails/009/385/892/small/pin-location-icon-sign-free-png.png" width="30px" alt="" style="drop-shadow: 2px 3px 5px black;"> &nbsp;<h3>${place},${sys}</h3></span> <br>
<div id="main">

</div>

<h2>${temperature}°C</h2>
<h3>${description}</h3>
<hr>
<div class="container text-center">
<div class="row">
<div class="col">
MinTemp(°C)
<br> ${mintemp}°C
</div>
<div class="col">
Humidity 
<br>${humidity}%
</div>
<div class="col">
  MaxTemp(°C) <br>${maxtemp}°C
</div>
</div>
</div>
<hr>
<div class="container text-center">
<div class="row">
<div class="col">
 pressure <br>
 ${pressure} mb

</div>
<div class="col">
windspeed <br>
${windspeed}km/h
</div>
<div class="col">
 feels like <br>
 ${feeltemp}°C
</div>

</div>

</div>
<hr>
</div>

    <div class="col">
 
    </div>
  </div>
</div>

`
final.innerHTML= htmlData
if(logo=="Clouds"){
main.innerHTML=`<img src="./photos/clouds.png" width="140px" alt=""><br>`

}
else if(logo=="Rain"){
  main.innerHTML=`<img src="./photos/rain1.png" width="180px" alt=""><br>`
  
  }
  else if(logo=="Clear"){
    main.innerHTML=`<img src="./photos/clear.png" width="100px" alt=""><br>`
    
    }
    else if(logo=="Haze"){
      main.innerHTML=`<img src="./photos/haze.png" width="100px" alt=""><br>`
      
      }
      else if(logo=="Mist"){
        main.innerHTML=`<img src="./photos/mist.png" width="100px" alt=""><br>`
        
        }
        else if(logo=="Thunderstorm"){
          main.innerHTML=`<img src="./photos/thunder.webp width="100px" alt=""><br>`
          
          }
}
  