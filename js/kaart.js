let map = L.map('mol').setView([51.191087, 5.1170647], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 12,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var circle = L.circle([51.191087, 5.1170647], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(map);



circle.bindPopup("Regio Mol");