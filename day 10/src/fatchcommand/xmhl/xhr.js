async function getCurrentWeather() {
    let cityTag = document.querySelector("#cityid");
  
    let appid = "479c04676c1c726d7e9d052a9a73da98";
    let city = cityTag.value || "mumbai";
    let url = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric&q=${city}`;
  
    // Request :: Response
    let xhr = new XMLHttpRequest();
  
    xhr.onload = () => {
      let jsonStr = xhr.response;
      let data = JSON.parse(jsonStr);
  
      // DOM OPERATION :: DISPLAY THE DATA TO THE END USER
      let lon = data.coord.lon;
      let lat = data.coord.lat;
      let currentTemp = data.main.temp;
      let maxTemp = data.main.temp_max;
      let minTemp = data.main.temp_min;
  
      let parentTag = document.querySelector("#parent");
      let newValue = `
                      <div class="fs-1">xhr CITY : ${city}</div>
                      <div class="fs-3">
                          Current Temp : <span class="badge bg-primary">${currentTemp}</span>
                      </div>
                      <div class="fs-4">Lon : ${lon} And Lat: ${lat}</div>
                      <div class="fs-4">Max : ${maxTemp} And Min: ${minTemp}</div>
                  `;
      parentTag.innerHTML = newValue;
    };
  
    xhr.open("GET", url);
    xhr.send();
  
    console.log(data);
  }