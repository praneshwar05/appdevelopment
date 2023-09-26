// SearchComponent.js
import React from 'react';
import { FcSearch } from 'react-icons/fc';

function SearchComponent({ myInputRef, searchAdventures }) {
  return (
    <div className="position-absolute top-0 start-50 translate-middle-x">
      <div className="row p-2">
        <div
          className="input-group mt-2"
          style={{
            minWidth: '50vw',
          }}
        >
          <input
            type="text"
            placeholder="Search for adventures"
            className="form-control"
            ref={myInputRef}
            style={{
              outline: '#0d6efd solid 2px',
            }}
          />
          <button
            style={{
              outline: '#0d6efd solid 2px',
            }}
            className="btn"
            type="button"
            onClick={searchAdventures}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <FcSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
