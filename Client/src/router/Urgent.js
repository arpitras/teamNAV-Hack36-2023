// import React from 'react'
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import "./maps.css"
// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 25.4944,
//   lng: 81.8613
// };
// //
// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyC95ItXxwCqbJYKXn2QzsS3dW92zijVF3c"
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     // const bounds = new window.google.maps.LatLngBounds(center);
//     // map.fitBounds(bounds);

//     setMap(map)
//   }, [])

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//     mapContainerStyle={containerStyle}
//     center={center}
//     zoom={10}
//     onLoad={onLoad}
//     onUnmount={onUnmount}
//   >
//     { /* Child components, such as markers, info windows, etc. */ }
//     <></>
//   </GoogleMap>

//   ) : <></>
// }

// export default React.memo(MyComponent)
import React, { Component } from 'react';

class Urgent extends Component {

  componentDidMount() {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC95ItXxwCqbJYKXn2QzsS3dW92zijVF3c&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          const map = new window.google.maps.Map(document.getElementById('map'), {
            center: userLocation,
            zoom: 15
          });
          
          const request = {
            location: userLocation,
            radius: 5000,
            type: ['hospital']
          };
          
          const service = new window.google.maps.places.PlacesService(map);
          service.nearbySearch(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              for (let i = 0; i < results.length; i++) {
                const marker = new window.google.maps.Marker({
                  position: results[i].geometry.location,
                  map: map
                });
              }
            }
          });
        });
      } else {
        // Handle no geolocation support
      }
    });
  }

  render() {
    return (
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    );
  }
}

export default Urgent;
