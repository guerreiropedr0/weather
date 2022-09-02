import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Info from './components/Info';
import { getLocation } from './app/weather';
import day from './assets/day.webp';
import night from './assets/night.jpg';
import dayCloudy from './assets/day-cloudy.jpg';
import nightCloudy from './assets/night-cloudy.png';
import overcast from './assets/overcast.jpg';
import snow from './assets/snow.jpg';

function App() {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.weather.location);

  const [background, setBackground] = useState(`url(${day})`);

  const handleBackground = () => {
    switch (current && current.condition.text) {
      case 'Sunny':
        setBackground(`url(${day})`);
        break;

      case 'Clear':
        setBackground(`url(${night})`);
        break;

      case 'Partly cloudy':
        if (current && current.is_day) {
          setBackground(`url(${dayCloudy})`);
        } else {
          setBackground(`url(${nightCloudy})`);
        }
        break;

      case 'Patchy snow possible':
      case 'Blowing snow':
      case 'Blizzard':
      case 'Patchy light snow':
      case 'Light snow':
      case 'Patchy moderate slow':
      case 'Moderate snow':
      case 'Patchy heavy snow':
      case 'Heavy snow':
      case 'Light snow showers':
      case 'Moderate or heavy snow showers':
      case 'Moderate or heavy snow with thunder':
        setBackground(`url(${snow})`);
        break;

      default:
        setBackground(`url(${overcast})`);
        break;
    }
  };

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
    <div
      onLoad={handleBackground}
      style={{ backgroundImage: background }}
      className="app"
    >
      <Navbar />
      <Info />
    </div>
  );
}

export default App;
