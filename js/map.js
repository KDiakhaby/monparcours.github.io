// Code JavaScript pour initialiser la carte Leaflet et ajouter des marqueurs
var map = L.map('map');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);

// Ajoutez ici des marqueurs pour chaque lieu où vous avez effectué des étapes et des sorties de terrain
L.marker([48.906, 2.345]).addTo(map) // Coordonnées de l'Université Paris 8
    .bindPopup('<div class="custom-popup-1">Université Paris 8</div>')
    .openPopup();

// Ajoutez un marqueur pour l'IGN à Saint-Mandé avec une popup personnalisée
L.marker([48.845726, 2.424573]).addTo(map)
    .bindPopup('<div class="custom-popup-2">Institut national de l\'information géographique et forestière (IGN)</div>')
    .openPopup();

// Ajoutez des marqueurs pour chaque lieu où vous avez effectué des stages
L.marker([46.7181, -2.3528]).addTo(map) // Île d'Yeu (Vendée)
    .bindPopup('<div class="custom-popup-stage-3">Stage de terrain en géographie, effectué en mai 2023 à l\'Île d\'Yeu (Vendée)</div>  Réaliser une enquête pour la mairie de l\'Île d\'Yeu sur le projet de la ferme municipale. Réalisation d\'un dossier cartographique');

L.marker([47.0296, 1.6966]).addTo(map) // Oulches (36)
    .bindPopup('<div class="custom-popup-stage-1">Stage de terrain en géographie (Pratique du terrain), effectué en mars 2022 à Oulches (36)</div> Réalisation d\'un dossier sur les pratiques de loisirs dans la Brenne');

L.marker([49.9765, 3.9723]).addTo(map) // Thiérache Aisne (Picardie)
    .bindPopup('<div class="custom-popup-stage-2">Stage de terrain en géographie, effectué en novembre 2022 dans le Thiérache, Aisne (Picardie)</div> Etude de la géodiversité et la biodiversité de la Thiérache et du Laonnois, réalisation d\'un poster');

// Créez un tableau contenant toutes les coordonnées des marqueurs
var markers = [
    [48.845726, 2.424573],
    [46.7181, -2.3528],
    [47.0296, 1.6966],
    [49.9765, 3.9723]
];

// Ajustez la vue de la carte pour englober tous les marqueurs
var bounds = new L.LatLngBounds(markers);
map.fitBounds(bounds);
