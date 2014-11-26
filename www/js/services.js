angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('MapInfos', function($http) {

  var c1Coords = [
        { lat: 45.260796, lng: 1.146355 },
        { lat: 45.262985, lng: 1.148919 },
        { lat: 45.265320, lng: 1.151687 },
        { lat: 45.266399, lng: 1.152288 },
        { lat: 45.266953, lng: 1.153350 },
        { lat: 45.267586, lng: 1.154455 },
        { lat: 45.268818, lng: 1.156633 },
        { lat: 45.269035, lng: 1.156504 },
        { lat: 45.269638, lng: 1.157856 },
        { lat: 45.270432, lng: 1.159068 },
        { lat: 45.270916, lng: 1.159701 },
        { lat: 45.274162, lng: 1.163220 },
        { lat: 45.276306, lng: 1.165495 },
        { lat: 45.278118, lng: 1.166997 },
        { lat: 45.279476, lng: 1.168456 },
        { lat: 45.281773, lng: 1.170387 },
        { lat: 45.282524, lng: 1.171460 },
        { lat: 45.282677, lng: 1.172533 },
        { lat: 45.282890, lng: 1.174893 },
        { lat: 45.282738, lng: 1.176610 },
        { lat: 45.283161, lng: 1.179228 },
        { lat: 45.286060, lng: 1.186309 },
        { lat: 45.286602, lng: 1.188068 },
        { lat: 45.287251, lng: 1.188433 },
        { lat: 45.287735, lng: 1.187103 },
        { lat: 45.287827, lng: 1.186416 },
        { lat: 45.287857, lng: 1.185912 },
        { lat: 45.287296, lng: 1.183434 },
        { lat: 45.287510, lng: 1.181717 },
        { lat: 45.287247, lng: 1.179872 },
        { lat: 45.287224, lng: 1.179652 },
        { lat: 45.287399, lng: 1.179110 },
        { lat: 45.287670, lng: 1.178353 },
        { lat: 45.287991, lng: 1.177806 },
        { lat: 45.288189, lng: 1.177399 },
        { lat: 45.288372, lng: 1.176884 },
        { lat: 45.288261, lng: 1.176519 },
        { lat: 45.287952, lng: 1.176079 },
        { lat: 45.287609, lng: 1.175682 },
        { lat: 45.287510, lng: 1.175569 },
        { lat: 45.287434, lng: 1.175408 },
        { lat: 45.287064, lng: 1.174647 },
        { lat: 45.286789, lng: 1.174073 },
        { lat: 45.286533, lng: 1.173434 },
        { lat: 45.286350, lng: 1.172935 },
        { lat: 45.286388, lng: 1.172217 },
        { lat: 45.286407, lng: 1.171508 },
        { lat: 45.286335, lng: 1.170747 },
        { lat: 45.285969, lng: 1.170473 },
        { lat: 45.285851, lng: 1.170232 },
        { lat: 45.285767, lng: 1.169599 },
        { lat: 45.285614, lng: 1.169277 },
        { lat: 45.285542, lng: 1.169170 },
        { lat: 45.285439, lng: 1.169100 },
        { lat: 45.285194, lng: 1.168950 },
        { lat: 45.284698, lng: 1.168655 },
        { lat: 45.283745, lng: 1.168145 },
        { lat: 45.283508, lng: 1.168059 },
        { lat: 45.283260, lng: 1.168000 },
        { lat: 45.283024, lng: 1.168000 },
        { lat: 45.282791, lng: 1.167790 },
        { lat: 45.281681, lng: 1.166525 },
        { lat: 45.279991, lng: 1.165795 },
        { lat: 45.278660, lng: 1.164207 },
        { lat: 45.277092, lng: 1.163607 },
        { lat: 45.275913, lng: 1.163735 },
        { lat: 45.275280, lng: 1.163607 },
        { lat: 45.274857, lng: 1.163049 },
        { lat: 45.273830, lng: 1.161804 },
        { lat: 45.272259, lng: 1.160688 },
        { lat: 45.271233, lng: 1.16002 }
      ];

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
        };

  var c1Markers = {
            m1: {
              // message: 'Départ de Hautefort',
              lat: 45.260326,
              lng: 1.145239,
              icon: icons.blue,
              focus: false,
              draggable: false,
              label: {
                  message: 'Départ de Hautefort',
                  options: {
                      noHide: false,
                      clickable: false
                  }
              }
            },
            m2: {
              lat: 45.277210,
              lng: 1.166353,
              icon: icons.blue,
              focus: false,
              draggable: false,
              label: {
                  message : 'Futaie de chênes',
                  options: {
                    noHide: false,
                    clickable: false
                  }
              }
            },
            m3: {
              lat: 45.286594,
              lng: 1.188047,
              icon: icons.blue,
              focus: false,
              draggable: false,
              label: {
                  message: 'Sortie du sentier',
                  options: {
                    noHide: false,
                    clickable: false
                  }
              }
            },
            m4: {
              lat: 45.288353,
              lng: 1.176889,
              icon: icons.blue,
              focus: false,
              draggable: false,
              label: {
                  message: 'Bourg de Boisseuilh',
                  options: {
                    noHide: false,
                    clickable: false
                  }
              }
            },
            m5: {
              lat: 45.282753,
              lng: 1.176653,
              icon: icons.blue,
              focus: false,
              draggable: false,
              label: {
                  message: 'Tunnel',
                  options: {
                    noHide: false,
                    clickable: false
                  }
              }
            },
            m6: {
              lat: 45.259815,
              lng: 1.148887,
              icon: icons.blue,
              focus: false,
              draggable: false,
              label: {
                  message: 'Arrivée',
                  options: {
                    noHide: false,
                    clickable: false
                  }
              }
            }
          };

  return {
    setCircuit: function() {
      // return $http.get('data/mapperz-kml-example.kml');
      // return $http.get('data/friends.json');
      return c1Coords;
    },
    setMarkers: function() {
      return c1Markers;
    }
  }

})

.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
