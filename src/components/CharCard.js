import { useDispatch } from 'react-redux';
import { deleteChar } from '../actions';

const CharCard = ({ charData, isLoading, error, saved }) => {
  const { born, died, name, playedBy, aliases } = charData;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteChar(charData));
  };

  return (
    <div className="card-wrapper">
      <>
        {isLoading && <p>Generating</p>}
        {error && <p>{error}</p>}
      </>
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
        {saved && (
          <button className="deleteBtn" onClick={handleDelete}>
            Destroy
          </button>
        )}
      </div>
    </div>
  );
};

export default CharCard;
