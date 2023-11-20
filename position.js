console.log('A');
navigator.geolocation.getCurrentPosition(success, error);
console.log('C');

function success(position){
  console.log(position);
  var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'    
  }).addTo(map);

  var link = 'https://api.openweathermap.org/data/2.5/weather?lat=40&lon=11&appid=ee6b293d773f4fcd7e434f79bbc341f2&units=metric&lang=it';

  $.getJSON(link, function(data){
    console.log(data);
    var temp = data.main.temp;
    var miodiv = document.getElementById('mioDiv');
    miodiv.innerText = temp;

  });
}

function error(error) {
    console.log(error);
    var miodiv = document.getElementById('mioDiv');
    miodiv.innerText = "Temperatura non disponibile";
}
