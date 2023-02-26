// Set up map
var center = L.bounds([1.56073, 105.11475], [1.16, 103.502]).getCenter();
var map = L.map('mapdiv', {
    zoomControl: false                  // remove top left zoom controls
}).setView([1.350270, 103.829959],13);  // lat and long coordinates + initial zoom

// zoom buttons to bottom right
L.control.zoom({ position: 'bottomright' }).addTo(map);

// add tile layer
var basemap = L.tileLayer('https://maps-{s}.onemap.sg/v3/Grey/{z}/{x}/{y}.png', {
    detectRetina: true,
    maxZoom: 20,
    minZoom: 11
});

// set max bounds
map.setMaxBounds([[1.50073, 104.1147], [1.16, 103.602]]);

basemap.addTo(map);

// custom marker icons
var LeafIcon = L.Icon.extend({
    options: {
        // shadowUrl: 'leaf-shadow.png',
        iconSize:     [40, 40],
        // shadowSize:   [50, 64],
        iconAnchor:   [20, 40],
        // shadowAnchor: [4, 62],
        popupAnchor:  [0, -25]
    }
});
var chaoticRestless = new LeafIcon({iconUrl: '../../static/images/customIcons/pink-marker.png'}),
    fulloflifeExciting = new LeafIcon({iconUrl: '../../static/images/customIcons/orange-marker.png'}),
    calmTranquil = new LeafIcon({iconUrl: '../../static/images/customIcons/green-marker.png'}),
    boringLifeless = new LeafIcon({iconUrl: '../../static/images/customIcons/black-marker.png'});

// add markers
$.get('../../static/locations.csv', function(csvString) {
    // Use PapaParse to convert string to array of objects
    var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;
    console.log(data);

    // For each row in data, create a marker and add it to the map
    for (var i in data) {
        var row = data[i];
        // data clean soundscape type for custom marker
        if (row.Type == 'F&E') {
            row.Type = fulloflifeExciting
        } else if (row.Type == 'B&L') {
            row.Type = boringLifeless
        } else if (row.Type == 'C&T') {
            row.Type = calmTranquil
        } else if (row.Type == 'C&R') {
            row.Type = chaoticRestless
        } else { row.Type = NULL};
        // create marker
        var marker = L.marker([
            parseFloat(row.Latitude), 
            parseFloat(row.Longitude)
        ], { opacity: 1, icon: row.Type }).bindPopup(row.Title).openPopup();
        marker.addTo(map);
    }
});