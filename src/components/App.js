import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import './Flat.scss';
import Flat from './Flat';
import { useEffect, useState } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import FlatMarker from './FlatMarker';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiY2RybXIxOCIsImEiOiJja3o5bXRybjMxbDlwMnRwa2w0amM5azNoIn0.tpftcH7amACCXKbpKNsRzQ',
});

const API_URL =
  'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';

const App = () => {
  const [flats, setFlats] = useState([]);

  useEffect(() => {
    document.title = `Airbnb - ${flats.length} flats`;
  }, [flats]);

  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((json) => setFlats(json));
  }, []);

  return (
    <div className="app">
      <div className="main">
        <input type="search" className="search" />
        <div className="flats">
          {flats.map(({ id, ...props }) => {
            return <Flat key={id} {...props} />;
          })}
        </div>
      </div>

      <div className="map">
        <Map
          zoom={[14]}
          center={[2.3522, 48.8566]}
          containerStyle={{ height: '100vh', width: '100%' }}
          style="mapbox://styles/mapbox/streets-v8"
        >
          <Marker coordinates={[2.3522, 48.8566]} anchor="bottom">
            <FlatMarker />
          </Marker>
        </Map>
      </div>
    </div>
  );
};

export default App;
