import { Link } from 'react-router-dom';
import SearchedAdventure from './SearchedAdventure';

const ModelSearchedAdventures = ({ searchedAdventures }) => (
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 ms-3" id="exampleModalLabel">
            Searched Adventures
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {searchedAdventures.map((adventrue) => (
            <Link
              to={`/adventures/${adventrue.id}`}
              key={adventrue.id}
              className="btn"
            >
              <SearchedAdventure
                name={adventrue.name}
                picture={adventrue.picture}
                description={adventrue.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ModelSearchedAdventures;
