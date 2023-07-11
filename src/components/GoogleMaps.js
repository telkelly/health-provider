import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';

const GoogleMap = () => {
  const [hospital, setHospital] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=PLACE_ID&fields=name,geometry&key=YOUR_API_KEY`
        );
        setHospital(response.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
    
    

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCjRBEiBB5qHoY10iZoJ8KA4UH9fvH8V-0' }}
        defaultCenter={hospital ? { lat: hospital.geometry.location.lat, lng: hospital.geometry.location.lng } : { lat: 0, lng: 0 }}
        defaultZoom={13}
      >
        {hospital && (
          <div
            lat={hospital.geometry.location.lat}
            lng={hospital.geometry.location.lng}
            style={{
              height: '10px',
              width: '10px',
              backgroundColor: 'red',
              borderRadius: '50%',
            }}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;

