import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import { getLocation } from './app/weather';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Get the lat and lon coords
    navigator.geolocation.getCurrentPosition((p) => {
      // Get the weather information with the lat and lon provided
      dispatch(getLocation(`${p.coords.latitude},${p.coords.longitude}`));
    }, () => {
      // Else get the weather information with the IP location
      dispatch(getLocation('auto:ip'));
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Weather />
    </div>
  );
}

export default App;
