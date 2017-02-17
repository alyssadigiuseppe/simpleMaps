(function() {
  var map, marker;

  function initMap(){
    map = new google.maps.Map(document.querySelector('.map-wrapper'), {
      center : { lat: 42.983233, lng: -81.250688 },
      zoom : 14
    }); //google object, inside of that a map object then a class, tells amp to center on this location and zoom to 14

    marker = new google.maps.Marker({
      position: { lat: 42.983233, lng: -81.250688 },
      map: map,
      title: "hello"
    });
  }
initMap();

})();
