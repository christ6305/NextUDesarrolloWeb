$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
  $('.modalM').click()
});


var map, infoWindow, pos, marker

if ( navigator.geolocation ) {
  navigator.geolocation.getCurrentPosition(function (position) {
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    initMap()
  })
} else {
  alert('Tu Navegador no soporta la Geolocalización')
}

function initMap() {
  var mapContainer = document.getElementById('map')
  var config = {
    center: {lat: -34.397, lng: 150.644},
    zoom: 5
  }
  map = new google.maps.Map(mapContainer, config)
  infoWindow = new google.maps.InfoWindow({ map: map })
  Agenda.init()
}

var button = document.getElementById('btn-geo')
button.addEventListener('click', function() {
  map.setCenter(pos)
  map.setZoom(15)
  // infoWindow.setPosition(pos)
  // infoWindow.setContent('Ubicación Encontrada')
  var markerOpts = {
    position: pos,
    map: map
  }
  marker = new google.maps.Marker(markerOpts)

})

var Agenda = {
  init: function(){
    this.listenMapClick()
    this.sitiosGuardados = []
    sessionStorage.setItem('sitios', JSON.stringify(this.sitiosGuardados))
  },
  listenMapClick: function(){
    var self = this
    console.log(0);
    google.maps.event.addListener(map, 'click', function(ev){
      var position = ev.latLng
      var modalInfo = document.getElemetsByClassName('modalInfo')[0].click()
      var btnGuardar = document.getElementsByClassName('guardaInfo')[0]
      btnGuardar.onclick = function(e){
        e.preventDefault()
        var nombre = document.getElementsByClassName('modalInfo')[0],
          descripcion = document.getElementsByClassName('descripcion')[0]
        var site = {
          nombre: nombre.value,
          descripcion: descripcion.value,
          latitud: position.lat(),
          longitud: position.lng()
        }
        self.saveAndPlaceMarker(site)
        nombre.value = ''
        descripcion.value = ''
        $('#modalCaptura').closeModal()
      }
    })
  },
  saveAndPlaceMarker: function(site){
    this.sitiosGuardados = JSON.parse(sessionStorage.getItem('sitios'))
    this.sitiosGuardados.push(site)
    sessionStorage.setItem('sitios', JSON.stringify(this.sitiosGuardados))
    this.renderSite(site)
  },
  renderSite: function(site){
    var htmlInfo = '<li class="collection-item avatar">'+
      '<i class="material-icons circle blue">thumb_up</i>'+
      '<span class="title"> :nombre: </span'+
      '<p> Latitud: :latitud: <br> Longitud: :longitud: <br>  Descripcion: :descripcion:</p>'+
      '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>'+
      '</li>';

    var newSite = htmlInfo
    var result = newSite.replace(':nombre:',site.nombre)
                        .replace(':latitud:',site.latitud)
                        .replace(':longitud:',site.longitud)
                        .replace(':descripcion:',site.descripcion)
    var allSites = document.getElementsByClassName('guardados')[0]
    var markerOpts = {
      position: {
        lat: site.latitud,
        lng: site.longitud
      },
      map:map
    }
    var newMarker = new google.maps.Marker(markerOpts)
    allSites.innerHTML = allSites.innerHTML + result
  }
}
