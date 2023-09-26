const Adventure = ({ name, description, picture }) => (
  <div className="co">
    <div className="card">
      <img
        src={`display-${picture}`}
        className="card-img-top display-img"
        alt="Adventure"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
);

export default Adventure;
