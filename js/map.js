var rendererOptions = {
  draggable: true
};
var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);;
var directionsService = new google.maps.DirectionsService();
var map;

var singapore = new google.maps.LatLng(1.35208 , 103.81984);

function initialize() {

  var mapOptions = {
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: singapore
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directionsPanel'));
  directionsDisplay.setOptions( { suppressMarkers: false } );

  google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
    computeTotalDistance(directionsDisplay.directions);
  });

  calcRoute();
}

function calcRoute() {

  var request = {
    origin: 'Changi International Airport,Singapore', //Changi Airport
    destination: 'Marina Bay Sands, Singapore', //Marina Bay Sands
    //waypoints:[{location: 'Singapore 648886'}, {location: 'Singapore 467347'}, {location: 'Singapore 729826'}, {location: 'Singapore 098350'}, {location: 'Singapore 828868'}],
    waypoints:[{location: 'Singapore 828868'}, {location: 'Singapore 729826'}, {location: 'Singapore 648886'}, {location: 'Singapore 098350'}, {location: 'Singapore 467347'}],
	travelMode: google.maps.DirectionsTravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
		directionsDisplay.setDirections(response);
    }
  });
}

function computeTotalDistance(result) {
  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
  total = total / 1000.
  document.getElementById('total').innerHTML = total + ' km';
}

google.maps.event.addDomListener(window, 'load', initialize);