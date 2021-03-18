import CharCard from './components/CharCard';
import Header from './components/Header';
import './styles/styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="char-wrapper">
        <CharCard />
      </div>
    </div>
  );
};

export default App;
