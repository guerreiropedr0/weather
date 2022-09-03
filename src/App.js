import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Info from './components/Info';
import { getLocation } from './app/weather';
import day from './assets/day.webp';
import dayDesktop from './assets/desktop/day.jpg';
import night from './assets/night.jpg';
import nightDesktop from './assets/desktop/night.jpg';
import dayCloudy from './assets/day-cloudy.jpg';
import dayCloudyDesktop from './assets/desktop/day-cloudy.jpg';
import nightCloudy from './assets/night-cloudy.png';
import nightCloudyDesktop from './assets/desktop/night-cloudy.jpg';
import overcast from './assets/overcast.jpg';
import overcastDesktop from './assets/desktop/overcast.jpg';
import snow from './assets/snow.jpg';
import snowDesktop from './assets/desktop/snow.jpg';

function App() {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.weather.location);

  const [background, setBackground] = useState(`url(${window.innerWidth > 768 ? dayDesktop : day})`);

  const handleBackground = () => {
    const isDesktop = window.innerWidth > 768;

    switch (current && current.condition.text) {
      case 'Sunny':
        setBackground(`url(${isDesktop ? dayDesktop : day})`);
        break;

      case 'Clear':
        setBackground(`url(${isDesktop ? nightDesktop : night})`);
        break;

      case 'Partly cloudy':
        if (current && current.is_day) {
          setBackground(`url(${isDesktop ? dayCloudyDesktop : dayCloudy})`);
        } else {
          setBackground(`url(${isDesktop ? nightCloudyDesktop : nightCloudy})`);
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
        setBackground(`url(${isDesktop ? snowDesktop : snow})`);
        break;

      default:
        setBackground(`url(${isDesktop ? overcastDesktop : overcast})`);
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
