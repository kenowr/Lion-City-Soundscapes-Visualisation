// Set up map
var center = L.bounds([1.56073, 105.11475], [1.16, 103.502]).getCenter();
var map = L.map('mapdiv', {
    zoomControl: false                  // remove top left zoom controls
}).setView([1.350270, 103.829959],13);  // lat and long coordinates + initial zoom

// zoom buttons to bottom right
L.control.zoom({ position: 'bottomright' }).addTo(map);

// disable double click zoom
map.doubleClickZoom.disable(); 

// custom marker icons
var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [40, 40],
        iconAnchor:   [20, 40],
        popupAnchor:  [0, -25]
    }
});
var chaoticRestless = new LeafIcon({iconUrl: '../../static/images/customIcons/pink-marker.png'}),
    fulloflifeExciting = new LeafIcon({iconUrl: '../../static/images/customIcons/orange-marker.png'}),
    calmTranquil = new LeafIcon({iconUrl: '../../static/images/customIcons/green-marker.png'}),
    boringLifeless = new LeafIcon({iconUrl: '../../static/images/customIcons/black-marker.png'});

const fulloflifeExciting_array = [];
const chaoticRestless_array = [];
const calmTranquil_array = [];
const boringLifeless_array = [];

// add markers
$.get('../../static/csv/locations.csv', function(csvString) {
    // Use PapaParse to convert string to array of objects
    var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;
    console.log(data);

    // For each row in data, create a marker and add it to the map
    for (var i in data) {
        var row = data[i];

        // data clean soundscape type for custom marker
        if (row.Type == 'F&E') {

            row.Type = fulloflifeExciting;

            // create marker, add it to layer, and push into array
            var marker = L.marker([
                parseFloat(row.Latitude), 
                parseFloat(row.Longitude)
            ], { opacity: 1, icon: row.Type }).bindPopup(row.Title).openPopup();
            fulloflifeExciting_layer.addLayer(marker);
            fulloflifeExciting_array.push(marker);

        } else if (row.Type == 'B&L') {

            row.Type = boringLifeless;

            // create marker, add it to layer, and push into array
            var marker = L.marker([
                parseFloat(row.Latitude), 
                parseFloat(row.Longitude)
            ], { opacity: 1, icon: row.Type }).bindPopup(row.Title).openPopup();

            boringLifeless_layer.addLayer(marker);
            boringLifeless_array.push(marker);

        } else if (row.Type == 'C&T') {

            row.Type = calmTranquil;
            
            // create marker, add it to layer, and push into array
            var marker = L.marker([
                parseFloat(row.Latitude), 
                parseFloat(row.Longitude)
            ], { opacity: 1, icon: row.Type }).bindPopup(row.Title).openPopup();
            calmTranquil_layer.addLayer(marker);
            calmTranquil_array.push(marker);

        } else if (row.Type == 'C&R') {

            row.Type = chaoticRestless;

            // create marker, add it to layer, and push into array
            var marker = L.marker([
                parseFloat(row.Latitude), 
                parseFloat(row.Longitude)
            ], { opacity: 1, icon: row.Type }).bindPopup(row.Title).openPopup();
            chaoticRestless_layer.addLayer(marker);
            chaoticRestless_array.push(marker);

        } else;
    }
});

// layer groups
var fulloflifeExciting_layer = L.layerGroup(fulloflifeExciting_array).addTo(map);
var chaoticRestless_layer = L.layerGroup(chaoticRestless_array).addTo(map);
var calmTranquil_layer = L.layerGroup(calmTranquil_array).addTo(map);
var boringLifeless_layer = L.layerGroup(boringLifeless_array).addTo(map);

// add map tile layer
var basemap = L.tileLayer('https://maps-{s}.onemap.sg/v3/Grey/{z}/{x}/{y}.png', {
    detectRetina: true,
    maxZoom: 20,
    minZoom: 11,
    layers: [
        fulloflifeExciting_layer,
        chaoticRestless_layer,
        calmTranquil_layer,
        boringLifeless_layer
    ]
}).addTo(map);

// set max bounds of map
map.setMaxBounds([[1.50073, 104.1147], [1.16, 103.602]]);

var overlayMaps = {
    "Full of Life and Exciting": fulloflifeExciting_layer,
    "Chaotic and Restless": chaoticRestless_layer,
    "Calm and Tranquil": calmTranquil_layer,
    "Boring and Lifeless": boringLifeless_layer
};

// add overlay layers to map and pass an empty object for the base layers argument
var layerControl = L.control.layers({}, overlayMaps, {
    position: 'topleft',
    collapsed: false,
    className: 'typesLayerControl'
}).addTo(map); 

// button click layer control
$('.leaflet-control-layers').hide();
$('.leaflet-control-layers').css('top','100px');

btn.onclick = function() {
    $('.leaflet-control-layers').toggle();
}