import './App.css';
import CampsitesList from './features/campsites/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';
import FilteredCampsites from './features/campsites/FilteredCampsites';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <FilteredCampsites activity='hiking' />
      <Footer />
    </div>
  );
};

export default App;
