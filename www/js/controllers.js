angular.module('starter.controllers', [])

.controller('DashCtrl', [ '$scope', 'MapInfos', function($scope, MapInfos) {

    console.log('DashCtrl on');

    // MapInfos.setCircuit().then(function(response) {
    //     var circuit = response.data;
    //     console.log(circuit);
    // });
    var icons = {
            blue: {
                type: 'div',
                iconSize: [10, 10],
                className: 'blue',
                iconAnchor:  [5, 5]
            },
            red: {
                type: 'div',
                iconSize: [10, 10],
                className: 'red',
                iconAnchor:  [5, 5]
            }
        }
    var c1Coords = MapInfos.setCircuit();
    var c1Markers = MapInfos.setMarkers();

    angular.extend($scope, {
        center: {
            lat: 45.259646,
            lng: 1.143,
            zoom: 13
        },
        defaults: {
            attributionControl : true,
            // MAP PAR DÉFAULT
            // tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",

            // MAP MAPBOX TERRAIN
            // tileLayer: "http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}",
            tileLayer: "http://api.tiles.mapbox.com/v4/ddelor.kaiok6fg/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGRlbG9yIiwiYSI6Im1sT05tN1kifQ.cAKcZuGtXTbXiWkeJY8jJw#13/45.2792/1.1609",

            // MAP PHOTO SATELLITE
            // tileLayer: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",

            // MAP N&B
            // tileLayer: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png",
            // maxZoom: 14,

            tileLayerOptions: {
                attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>'
            },
            scrollWheelZoom: false
        },
        // layers: {
        //     baselayers: {
        //         map: {
        //             name: 'mapboxMap',
        //             type: 'xyz',
        //             url: 'http://api.tiles.mapbox.com/v4/ddelor.kaiok6fg/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGRlbG9yIiwiYSI6Im1sT05tN1kifQ.cAKcZuGtXTbXiWkeJY8jJw#13/45.2792/1.1609'
        //         }
        //     },
            // overlays: {
            //     red: {
            //         type: 'group',
            //         name: 'red',
            //         visible: false
            //     },

            //     blue: {
            //         type: 'group',
            //         name: 'blue',
            //         visible: false
            //     }
            // }
        // },
        path: {
            c1: {
                color: 'red',
                weight: 8,
                latlngs: c1Coords
            }
        },
        markers: c1Markers
    });

    // TESTS SUR LES EVENTS
    $scope.$on('leafletDirectiveMap.load', function(e, args) {
        console.log('map loaded');
    //     console.log(e);
    //     console.log(args);
    });

    // $scope.$on('leafletDirectiveMarker.popupopen', function(e, args) {
    //     console.log("Leaflet Popup Open");
    //     console.log(args);
    // });

    $scope.$on('leafletDirectiveMarker.click', function(e, args) {
    //     console.log(e);
    //     console.log(args);
        temp_marker = $scope.markers[args.markerName];
        console.log(temp_marker);
    //     args.leafletEvent.target.openPopup();
    });

}])

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {

    console.log('AccountCtrl on');

    $scope.mapCreated = function(map) {
        console.log('map loaded');
        $scope.map = map;
    };

});



