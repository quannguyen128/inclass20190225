import React, { Component } from 'react';
import BasicForm from './Components/BasicForm';
import ReactMapboxGl , {Layer, Feature } from 'react-mapbox-gl';


import './App.css';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoicXVhbm5ndXllbjEyOCIsImEiOiJjanRoZ2VkMncyZTdlM3pvMzZrc29ucmI2In0.0S4aJJoMTLcwZx-3qP5UIA'
});

class App extends Component {

    constructor(props) {
      super(props);

      const mapstyles = [ "basic", "streets", "bright", "light", "dark", "satellite"];

      this.state = {
        lng: -98.5795,
        lat: 39.828175,
        zoom: 2,
        mapstyle: mapstyles[Math.floor(Math.random() * mapstyles.length)],
      };
    }

    componentDidMount(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          this.setState( () => {
              return {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              }
          }
        );
      });
    }else{
      console.log("Geolocation is not supported by this browser. ");
    }
  }
  
  render() {

    const {lng, lat, zoom, mapstyle } = this.state;

    return (
      <div className="container">
      <div className="form"> <BasicForm /> </div>
      <div> {`Longitdue: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
      <Map style={`mapbox://styles/mapbox/${mapstyle}-v9`}
           center={[lng, lat]}
           containerStyle={{
             height: "400px",
             width: "100%"
           }}>
           <Layer type="symbol"
                  id="marker"
                  layout={{"icon-image": "marker-15"}}>
                  <Feature coordinates={[lng, lat]}/>
           </Layer>
      </Map>
    </div>
    );
  } 
}



export default App;
