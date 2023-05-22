function getCurrentWeather() {
    let cityTag = document.querySelector("#cityid");
  
    let appid = "479c04676c1c726d7e9d052a9a73da98";
    let city = cityTag.value || "mumbai";
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric&q=${city}`;
  
   
    let jquery = jQuery.get(url);
  
    jquery.done((data) => {
    
      let lon = data.coord.lon;
      let lat = data.coord.lat;
      let currentTemp = data.main.temp;
      let maxTemp = data.main.temp_max;
      let minTemp = data.main.temp_min;
  
      let parentTag = document.querySelector("#parent");
      let newValue = `
        <div class="fs-1"> Jquery CITY : ${city}</div>
        <div class="fs-3">
            Current Temp : <span class="badge bg-primary">${currentTemp}</span>
        </div>
        <div class="fs-4">Lon : ${lon} And Lat: ${lat}</div>
        <div class="fs-4">Max : ${maxTemp} And Min: ${minTemp}</div>
      `;
      parentTag.innerHTML = newValue;
    });
  }