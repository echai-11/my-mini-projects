$(document).ready(function () {
    var lat, lon, api_url;
    if ("geolocation" in navigator) {
      $('#getIt').on('click', function () {
         navigator.geolocation.getCurrentPosition(gotLocation);
        function gotLocation(position) {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
                    lat + '&lon=' + 
                    lon + '&units=imperial&appid=c87bc988f0318f6297f0ebd717e95506';
          $.ajax({
            url : api_url,
            method : 'GET',
            success : function (data) {
                var tempr = data.main.temp;
                var location = data.name;
                var desc = data.weather.description;
              $('#output').text(tempr + '°F ' + location).css("text-align", "center");
              var backgroundimg;
              var bodycolor;
                if (data.main.temp <= 32){
                    backgroundimg="blue";
                    bodycolor="blue";
                } else if (data.main.temp<=55){
                    backgroundimg= "lightblue";
                    bodycolor="lightblue";
                } else if (data.main.temp <= 75){
                    backgroundimg= "yellow";
                    bodycolor="yellow";
                } else if (data.main.temp <= 85){
                    backgroundimg= "orange";
                    bodycolor="orange";
                } else if (data.main.temp <= 95){
                    backgroundimg= "darkorange";
                    bodycolor="darkorange";
                } else if (data.main.temp > 95){
                    backgroundimg="red";
                    bodycolor="red";
                }
                $('#output').css("background-color", backgroundimg);
                $('body').css("background-color", bodycolor);
            }
          });
       }
      }); 
    } else {
      alert('Your browser doesnt support geolocation. Sorry.');
    }
  });