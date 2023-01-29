function createMarker(map, position, content) {
    const marker = new google.maps.Marker({
        position: position,
        map: map
    });
    const infowindow = new google.maps.InfoWindow({
        content: content
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    return marker;
}

function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
    const contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Marker Description</h1>' +
        '<div id="bodyContent">' +
        '<p>Here is some information about the marker.</p>' +
        '</div>' +
        '</div>';
    createMarker(map, { lat: -34.397, lng: 150.644 }, contentString)
    google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
    });
}
initMap();