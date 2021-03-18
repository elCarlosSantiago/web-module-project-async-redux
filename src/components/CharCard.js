import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../actions';

const CharCard = () => {
  const dispatch = useDispatch();
  const { charData, isLoading, error } = useSelector((state) => state);
  const { born, died, name, playedBy, aliases } = charData;

  useEffect(() => {
    dispatch(getCharacter());
  }, [dispatch]);

  console.log('aliases', aliases);
  console.log('playedBy', playedBy);
  return (
    <div className="card-wrapper">
      {isLoading && <h1>Generating</h1>}
      {error && <p>{error}</p>}
      <div className="card">
        <h3>Name: {name}</h3>
        {aliases && aliases[0] !== '' ? <h4>Aliases:</h4> : null}
        <ul>
          {aliases && aliases[0] !== ''
            ? aliases.map((alias) => <li key={alias}>{alias}</li>)
            : null}
        </ul>
        {born && <p>Born {born}</p>}
        {died && <p>Died {died}</p>}
        {playedBy && playedBy[0] !== '' ? <h5>Played By:</h5> : null}
        <ul>
          {playedBy && playedBy[0] !== ''
            ? playedBy.map((actor) => <li key={actor}>{actor}</li>)
            : null}
        </ul>
        <button onClick={() => dispatch(getCharacter())}>Randomize</button>
      </div>
    </div>
  );
};

export default CharCard;
