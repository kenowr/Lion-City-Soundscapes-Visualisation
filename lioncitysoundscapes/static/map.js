window.onload = function() {
    // Set up initial map center and zoom control
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

    // manually add markers
    // var marker = L.marker([1.320611, 103.81609]).addTo(map);
    // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    // get map data
    $.get('../../static/locations.csv', function(csvString) {
        // var data = $.csv.toObjects(csvString);

        // Use PapaParse to convert string to array of objects
        var data = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;
        console.log(data);

        // For each row in data, create a marker and add it to the map
        // For each row, columns `Latitude`, `Longitude`, and `Title` are required
        for (var i in data) {
            var row = data[i];

            var marker = L.marker([
                parseFloat(row.Latitude), 
                parseFloat(row.Longitude)
            ], { opacity: 1 }).bindPopup(row.Title).openPopup();
        
          marker.addTo(map);
        }
    });
};


