function getWeather(){
    function append(parent, el) {
      return parent.appendChild(el);
    }
    function remove(parent, el) {
      return parent.removeChild(el);
    }
    const ul = document.getElementById('weather');
        while (ul.firstChild) {
          ul.removeChild(ul.firstChild);
      }
    var city = document.getElementById("cityInput").value;
    document.getElementById("city").innerHTML = city;
  
    
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=9b7cdda100b385f32905ded030287258")
    .then((resp) => resp.json())
    .then(function(data) {
      let weather = data.main;
      console.log(data);
       Object.keys(weather).forEach(function(key) {
      let li = document.createElement('li'),
            span = document.createElement('span');
        span.innerHTML = "The" + " " + key + " is: " + weather[key];
        append(li, span);
        append(ul, li);
      });
  })
  .catch(function() {
        document.getElementById("weather").innerHTML = "Please enter a valid city to retrieve the weather";
    });  
  }
  
  function getWind(){
    function append(parent, el) {
      return parent.appendChild(el);
    }
    function remove(parent, el) {
      return parent.removeChild(el);
    }
    const ul = document.getElementById('weather');
        while (ul.firstChild) {
          ul.removeChild(ul.firstChild);
      }
    var city = document.getElementById("cityInput").value;
    document.getElementById("city").innerHTML = city;
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=9b7cdda100b385f32905ded030287258")
    .then((resp) => resp.json())
    .then(function(data) {
      let weather = data.wind;
       Object.keys(weather).forEach(function(key) {
      let li = document.createElement('li'),
            span = document.createElement('span');
        span.innerHTML = "The" + " " + "wind" + " " + key + " is: " + weather[key];
        append(li, span);
        append(ul, li);
      });
  })
  .catch(function() {
        document.getElementById("weather").innerHTML = "Please enter a valid city to retrieve the weather";
    });  
  }
  
  function getCoord(){
    function append(parent, el) {
      return parent.appendChild(el);
    }
    function remove(parent, el) {
      return parent.removeChild(el);
    }
    const ul = document.getElementById('weather');
        while (ul.firstChild) {
          ul.removeChild(ul.firstChild);
      }
    var city = document.getElementById("cityInput").value;
    document.getElementById("city").innerHTML = city;
  
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=9b7cdda100b385f32905ded030287258")
    .then((resp) => resp.json())
    .then(function(data) {
      let weather = data.coord;
       Object.keys(weather).forEach(function(key) {
      let li = document.createElement('li'),
            span = document.createElement('span');
        span.innerHTML = "The" + " " + key + " is: " + weather[key];
        append(li, span);
        append(ul, li);
      });
  })
  .catch(function() {
        document.getElementById("weather").innerHTML = "Please enter a valid city to retrieve the weather";
    });  
  }