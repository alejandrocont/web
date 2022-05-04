// Tabbed Menu
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
  }
  document.getElementById("myLink").click();
  
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAB2fLqEcxJFE1bkTPKiXlKIj-6nBH8zts&callback=initMap"
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(iniciarMapa);
  }
  function iniciarMapa(){
    var latitud = navigator.geolocation.getCurrentPosition.latitud
    var longitud = 70.6789547
  
    coordenadas = {
      lng: longitud,
      lat: latitud
    }
    generarMapa(coordenadas);
  }
  function generarMapa(coordenadas){
    var mapa = new google.maps.Map(document.getElementById('Map'),{
      zoom: 12,
      center: new google.maps.latLng(coordenadas.lat, coordenadas.lng)
    });
  }