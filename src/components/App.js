import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import './Flat.scss';
import Flat from './Flat';
import { useEffect, useState } from 'react';

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
    </div>
  );
};

export default App;
