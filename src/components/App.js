import './App.scss';
import './Flat.scss';
import Flat from './Flat';

const App = () => {
  return (
    <div className="app">
      <div className="main">
        <input type="search" className="search" />
        <div className="flats">
          <Flat
            price={99}
            name="Beautiful Soho Space"
            img="https://images.unsplash.com/photo-1556784344-ad913c73cfc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          />
          <Flat
            price={35}
            name="Seafront plaza"
            img="https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
          />
          <Flat
            price={55}
            name="Downtown Towers"
            img="https://images.unsplash.com/photo-1626374295803-a333cfeca51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
