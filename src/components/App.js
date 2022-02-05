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
  const [center, setCenter] = useState([2.3522, 48.8566]);
  const [selectedFlat, setSelectedFlat] = useState();

  useEffect(() => {
    document.title = `Airbnb - ${flats.length} flats`;
  }, [flats]);

  useEffect(() => {
    fetch(API_URL)
      .then((data) => data.json())
      .then((json) => setFlats(json));
  }, []);

  const handleFlatSelect = (id, lng, lat) => {
    setCenter([lng, lat]);
    setSelectedFlat(id);
  };

  return (
    <div className="app">
      <div className="main">
        <input type="search" className="search" />
        <div className="flats">
          {flats.map(({ ...props }) => {
            return (
              <Flat key={props.id} {...props} onSelect={handleFlatSelect} />
            );
          })}
        </div>
      </div>

      <div className="map">
        <Map
          zoom={[14]}
          center={center}
          containerStyle={{ height: '100vh', width: '100%' }}
          style="mapbox://styles/mapbox/streets-v8"
        >
          {flats.map(({ id, lat, lng, ...props }) => {
            return (
              <Marker key={id} coordinates={[lng, lat]} anchor="bottom">
                <FlatMarker {...props} selected={selectedFlat === id} />;
              </Marker>
            );
          })}
        </Map>
      </div>
    </div>
  );
};

export default App;
