/* VARIABLES */
var kea_food = {
    lat: 55.706369,
    lng: 12.539130
};
var kea_station = {
    lat: 55.706280,
    lng: 12.541472
};
var kea_lidl = {
    lat: 55.706296,
    lng: 12.538201
};
var kea_bar = {
    lat: 55.706491,
    lng: 12.539169
};
var kea_lygtenkro = {
    lat: 55.703106,
    lng: 12.537331
};

var map;
var map_overlay_01;


/* GOOGLE MAP */

function initMap() {
    map = new
    google.maps.Map(document.getElementById('map'), {
        center: kea_food,
        zoom: 19,
    });

    /* --- MARKERS --- */
    var marker01 = new google.maps.Marker({
        position: kea_food,
        map: map,
        title: 'This is where you buy food',

    });
    var marker02 = new google.maps.Marker({
        position: kea_station,
        map: map,
        title: 'This is where you go to get home',
    });
    var marker03 = new google.maps.Marker({
        position: kea_lidl,
        map: map,
        title: 'This is where you buy food at the end of the month',

    });
    var marker04 = new google.maps.Marker({
        position: kea_bar,
        map: map,
        title: 'This is where you buy beer',

    });
    var marker05 = new google.maps.Marker({
        position: kea_lygtenkro,
        map: map,
        title: "This is where you buy beer, when it is before 14:00 or not friday",

    });

    var imageBounds = {
        north: 55.709487542710306,
        south: 55.701507973626924,
        east: 12.54336886545832,
        west: 12.535322238413642
    };

    map_overlay_01 = new google.maps.GroundOverlay(
        "img/map_overlay_01.svgke",
        imageBounds);
    map_overlay_01.setMap(map);
}
