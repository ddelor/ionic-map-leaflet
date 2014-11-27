angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {

      var zoom = [45.27078, 1.16524];
      var circuit = [
            [45.260796, 1.146355],
            [45.262985, 1.148919],
            [45.265320, 1.151687],
            [45.266399, 1.152288],
            [45.266953, 1.153350],
            [45.267586, 1.154455],
            [45.268818, 1.156633],
            [45.269035, 1.156504],
            [45.269638, 1.157856],
            [45.270432, 1.159068],
            [45.270916, 1.159701],
            [45.274162, 1.163220],
            [45.276306, 1.165495],
            [45.278118, 1.166997],
            [45.279476, 1.168456],
            [45.281773, 1.170387],
            [45.282524, 1.171460],
            [45.282677, 1.172533],
            [45.282890, 1.174893],
            [45.282738, 1.176610],
            [45.283161, 1.179228],
            [45.286060, 1.186309],
            [45.286602, 1.188068],
            [45.287251, 1.188433],
            [45.287735, 1.187103],
            [45.287827, 1.186416],
            [45.287857, 1.185912],
            [45.287296, 1.183434],
            [45.287510, 1.181717],
            [45.287247, 1.179872],
            [45.287224, 1.179652],
            [45.287399, 1.179110],
            [45.287670, 1.178353],
            [45.287991, 1.177806],
            [45.288189, 1.177399],
            [45.288372, 1.176884],
            [45.288261, 1.176519],
            [45.287952, 1.176079],
            [45.287609, 1.175682],
            [45.287510, 1.175569],
            [45.287434, 1.175408],
            [45.287064, 1.174647],
            [45.286789, 1.174073],
            [45.286533, 1.173434],
            [45.286350, 1.172935],
            [45.286388, 1.172217],
            [45.286407, 1.171508],
            [45.286335, 1.170747],
            [45.285969, 1.170473],
            [45.285851, 1.170232],
            [45.285767, 1.169599],
            [45.285614, 1.169277],
            [45.285542, 1.169170],
            [45.285439, 1.169100],
            [45.285194, 1.168950],
            [45.284698, 1.168655],
            [45.283745, 1.168145],
            [45.283508, 1.168059],
            [45.283260, 1.168000],
            [45.283024, 1.168000],
            [45.282791, 1.167790],
            [45.281681, 1.166525],
            [45.279991, 1.165795],
            [45.278660, 1.164207],
            [45.277092, 1.163607],
            [45.275913, 1.163735],
            [45.275280, 1.163607],
            [45.274857, 1.163049],
            [45.273830, 1.161804],
            [45.272259, 1.160688],
            [45.271233, 1.160023]
          ];
      var etapes = [
            {
              name: 'Départ de Hautefort',
              coords: [45.260326, 1.145239],
              iconOff: 'img/icon-etap-off-1.png'
            },
            {
              name: 'Futaie de chênes',
              coords: [45.277210, 1.166353],
              iconOff: 'img/icon-etap-off-2.png'
            },
            {
              name: 'Sortie du sentier',
              coords: [45.286594, 1.188047],
              iconOff: 'img/icon-etap-off-3.png'
            },
            {
              name: 'Bourg de Boisseuilh',
              coords: [45.288353, 1.176889],
              iconOff: 'img/icon-etap-off-4.png'
            },
            {
              name: 'Tunnel',
              coords: [45.282753, 1.176653],
              iconOff: 'img/icon-etap-off-5.png'
            },
            {
              name: 'Arrivée',
              coords: [45.259815, 1.148887],
              iconOff: 'img/icon-etap-off-6.png'
            }
          ];
      var poi = [];

      function initialize() {

        // crée l'objet de la carte
        var map = L.map('map').setView(zoom, 13);

        // crée le calque de la carte
        L.tileLayer('http://api.tiles.mapbox.com/v4/ddelor.kaiok6fg/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGRlbG9yIiwiYSI6Im1sT05tN1kifQ.cAKcZuGtXTbXiWkeJY8jJw#13/45.2792/1.1609', { attribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox © OpenStreetMap</a>' }).addTo(map);

        // crée le tracé du circuit
        var polyline = L.polyline(
          circuit, {
            color: '#a2c36c',
            opacity: '1',
            weight: '8'
          }
        ).addTo(map);

        // crée les marqueurs et leur popup pour le circuit
        var marker = [];

        for (var i = 0; i < etapes.length; i++) {

          var etapCoords = etapes[i].coords;
          var etapIcon = L.icon({
            iconUrl: etapes[i].iconOff,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
            popupAnchor: [0, -15]
          });
          var etapName = etapes[i].name;

          marker.push(L.marker(etapCoords, {icon: etapIcon}).addTo(map).bindPopup(etapName));

        }

        // ajoute la map dans le scope
        $scope.onCreate({map: map});

      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        alert('Erreur de chargement de la carte.');
      }
    }
  }
});
