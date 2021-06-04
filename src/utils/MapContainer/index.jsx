import { React, useState }from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

const API_KEY = "AIzaSyCCOko4xsdFUb_a47hJJwzPsie043gujc4";

const MapContainer = () => {
  const mapStyles = {
    height: "350px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 51.53113051205795,
    lng: 0.05106622278771793,
  };

  const item = {
      name: "53 Ernald Avenue, London, United Kingdom, E6 3AL",
      location: defaultCenter
  }

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
           <Marker position={defaultCenter} 
           onClick={() => onSelect(item)}
          />;
        {
            selected.location && 
            (
              <InfoWindow
              position={defaultCenter}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
