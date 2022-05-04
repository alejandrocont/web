
              let map;
              function initMap() {
                     map = new google.maps.Map( document.getElementById( 'map' ), {
                           center: {
                                    lat: 40.419450,
                                    lng: -3.692910
                           },
                           zoom: 14
                     });
              }
              map = new google.maps.Map(document.getElementById( 'map' ), {
                center: {
                     lat: 40.419450,
                     lng: -3.692910
                     },
                zoom: 14,
                mapTypeId: 'hybrid'
            })        
            let marker = new google.maps.Marker({
                    position: {
                        lat: 40.413913,
                        lng: -3.713617
                    },
                    map: map,
                    title: 'name'
            });
            let infoWindow = new google.maps.InfoWindow({
            content: '<h2>name</h2>'
            });
            marker.addListener( 'click', function() {
             infoWindow.open( map, marker );
            });
             src="https://ayudahosting.online/wp-content/litespeed/localres/aHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pz?key=AIzaSyAB2fLqEcxJFE1bkTPKiXlKIj-6nBH8zts&callback=initMap"