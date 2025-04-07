document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // the atmospheric layers
    var troposphere = L.circle([0, 0], {
        color: 'blue',
        fillColor: '#30f',
        fillOpacity: 0.2,
        radius: 1000000 // 1,000 km
    }).addTo(map).bindPopup("Troposphere");

    var stratosphere = L.circle([0, 0], {
        color: 'green',
        fillColor: '#3f0',
        fillOpacity: 0.2,
        radius: 2000000 // 2,000 km
    }).addTo(map).bindPopup("Stratosphere");

    // Fetch and add asteroids data
    fetch('/data/asteroids')
        .then(response => response.json())
        .then(data => {
            data.forEach(asteroid => {
                L.marker(asteroid.coordinates)
                    .bindPopup(`<strong>${asteroid.name}</strong>`)
                    .addTo(map);
            });
        });

    // Fetch and get the satellite data
    fetch('/data/satellites')
        .then(response => response.json())
        .then(data => {
            data.forEach(satellite => {
                L.marker(satellite.coordinates)
                    .bindPopup(`<strong>${satellite.name}</strong>`)
                    .addTo(map);
            });
        });
});
