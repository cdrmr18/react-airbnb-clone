import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import './Flat.scss';
import Flat from './Flat';
import { useState } from 'react';

const App = () => {
  const [flats, setFlats] = useState([]);

  return (
    <div className="app">
      <div className="main">
        <input type="search" className="search" />
        <div className="flats">
          {flats.map((id, ...props) => {
            return <Flat key={id} {...props} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
