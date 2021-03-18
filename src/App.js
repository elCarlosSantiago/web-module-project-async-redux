import CharCard from './components/CharCard';
import Header from './components/Header';
import './styles/styles.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter, saveChar } from './actions';

const App = () => {
  const dispatch = useDispatch();
  const { charData, isLoading, error, savedChars } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getCharacter());
  }, [dispatch]);
  const handleSave = () => {
    if (!savedChars.includes(charData)) {
      dispatch(saveChar(charData));
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="char-wrapper">
        <CharCard
          charData={charData}
          isLoading={isLoading}
          error={error}
          saved={false}
        />
      </div>
      <div className="button-wrapper">
        <button onClick={() => dispatch(getCharacter())}>Randomize</button>
        <button onClick={handleSave}>Save Character!</button>
      </div>
      <div className="saved-chars">
        {savedChars.map((char) => {
          return (
            <CharCard
              key={char.name}
              charData={char}
              isLoading={false}
              error={false}
              saved={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
