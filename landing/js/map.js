var map;
function initMap() {
	var myLatlng = new google.maps.LatLng(38.708727, -77.022895)
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatlng,
		zoom: 15,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
		{
			"featureType": "all",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"saturation": 36
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 40
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.text.stroke",
			"stylers": [
			{
				"visibility": "on"
			},
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
			]
		},
		{
			"featureType": "all",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 20
			}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			},
			{
				"weight": 1.2
			}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 20
			}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 21
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 29
			},
			{
				"weight": 0.2
			}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 18
			}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 16
			}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 19
			}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
			{
				"color": "#000000"
			},
			{
				"lightness": 17
			}
			]
		}
		]
	});

	var contentString = '<div id="content">Fort Washington</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var img = new google.maps.MarkerImage('./images/marker.png');
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: img,
		title: 'Uluru (Ayers Rock)'
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}