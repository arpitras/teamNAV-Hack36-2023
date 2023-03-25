// import React from 'react'
import './Urgent.css';
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
            radius: 50000,
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
      
      <div>
      <link rel="stylesheet" href="Urgent.css" />
       <div className='row'>
        <div className='col-md-12 col-lg-6 naman'>
          <div className = "guidelines">
          <p className='title'>There is some of the things you can do right Now</p>
        <h5>1. Talk to someone you trust</h5>
        <h6>Talking to someone you trust whether a friend, a family member, or a colleague can help. You may feel better if you are able to openly share what you are going through with someone who cares about you</h6>
        <br/>
        <h5>2. Look after your physical health</h5>
        <h6>Taking care of your physical health helps improve your mental health and well-being. Be active for at least 30 minutes daily, whether that’s running, walking, yoga, dancing, cycling, or even gardening. Eat a balanced and healthy diet. Make sure to get enough sleep.</h6>
        <br/>
        <h5>3. Do activities that you enjoy</h5>
        <h6>Try to continue doing the activities that you find meaningful and enjoyable, such as cooking for yourself or your loved ones, playing with your pet, walking in the park, reading a book, or watching a film or TV series</h6>
         <br/>
          </div>
        </div>
        <div className='col-md-12 col-lg-6 singh'>
          <h3 className='Near'>Nearby Health centres</h3>
        <div id="map"  className = "healthMap" style={{ height: '450px', width: '95%'}}></div>
        </div>
       </div> 
      <p className='title'>Here is some of the important links which may help you</p>
      <div className = "helpLineNo">
      <div id="member" className="container sect">
      <div className="row">
      <div className="col-md-6 col-lg-4">
              <div className="member-post">
                <img
                  className="image"
                  src="https://a-z-animals.com/media/2022/11/shutterstock_1804041961-1024x512.jpg"
                  alt="a"
                />
                <p className="lead name">
                  <strong>Link1</strong>
                </p>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis, magni!
                </p>
                  <img src="https://www.helplinecenter.org/wp-content/uploads/helplinelogo2021.jpg"
                  alt="a"
                />
               
                <p className="lead name">
                  <a href = "https://www.thelivelovelaughfoundation.org/helpline" target = "blanck"><strong>Click here to go</strong></a>
                </p>
               
              </div>
            </div>
      <div className="col-md-6 col-lg-4">
              <div className="member-post">
                <img
                  className="image"
                  src="https://a-z-animals.com/media/2022/11/shutterstock_1804041961-1024x512.jpg"
                  alt="a"
                />
                <p className="lead name">
                  <strong>Link1</strong>
                </p>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis, magni!
                </p>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLBl3r_g5JYuMH-1bqKfUUq1llTAnDjj7ww&usqp=CAU"
                  alt="a"
                />
               
                <p className="lead name">
                  <a href = "https://thehappinesscenter.ng/"><strong>Click here to go</strong></a>
                </p>
                
              </div>
            </div>
      <div className="col-md-6 col-lg-4">
              <div className="member-post">
                <img
                  className="image"
                  src="https://a-z-animals.com/media/2022/11/shutterstock_1804041961-1024x512.jpg"
                  alt="a"
                />
                <p className="lead name">
                  <strong>Link1</strong>
                </p>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis, magni!</p>
                <img  src="https://www.wikihow.com/images/thumb/7/71/Get-Download-Games-in-the-Background-%28While-Xbox-Is-Off%29-Step-2-Version-3.jpg/v4-460px-Get-Download-Games-in-the-Background-%28While-Xbox-Is-Off%29-Step-2-Version-3.jpg.webp"
                  alt="a"
                />
                <p className="lead name">
                  <a href = "https://poki.com/"><strong>Click here to go</strong></a>
                </p>
              </div>
            </div>
            </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Urgent;
