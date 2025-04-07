document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

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

    // Fetch and add satellites data
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