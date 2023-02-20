var center = L.bounds([1.56073, 105.11475], [1.16, 103.502]).getCenter();
var map = L.map('mapdiv').setView([1.350270, 103.829959],13);

var basemap = L.tileLayer('https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png', {
    detectRetina: true,
    maxZoom: 20,
    minZoom: 13
});

map.setMaxBounds([[1.50073, 104.1147], [1.16, 103.602]]);

basemap.addTo(map);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
}

function showPosition(position) {           
    marker = new L.Marker([position.coords.latitude, position.coords.longitude], {bounceOnAdd: false}).addTo(map);             
    var popup = L.popup()
    .setLatLng([position.coords.latitude, position.coords.longitude]) 
    .setContent('You are here!')
    .openOn(map);         
}


// openstreetmap
// var map = L.map('map', {
//     zoomControl: false                                              // remove top left zoom controls
//   }).setView([1.350270, 103.829959],12.3);                          // lat and long coordinates
  
//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: 
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//   }).addTo(map);

//   //zoom buttons to bottom right
//   L.control.zoom({ position: 'bottomright' }).addTo(map);