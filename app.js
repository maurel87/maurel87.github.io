var map = L.map('map').setView([0.419643, 9.426728], 6);
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', { maxZoom: 20 }).addTo(map);
var lbv = [0.419643, 9.426728]
var marker = L.marker(lbv).addTo(map);
marker.bindPopup('<h3> Institut National de Cartographie. </h3>');