function initMap() {
    // Initializes a map without custom styles
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 12.9698, lng: 77.7500},
        zoom: 12,
        mapTypeControl: true,
        disableDefaultUI: true
    });
}
