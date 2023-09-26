const SearchedAdventure = ({ name, picture, description }) => (
  <div
    className="card mb-3"
    style={{ 'max-width': '540px' }}
    data-bs-dismiss="modal"
    aria-label="Close"
  >
    <div className="row g-0">
      <div className="col-md-4">
        <img
          src={picture}
          className="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text" />
        </div>
      </div>
    </div>
  </div>
);

export default SearchedAdventure;
