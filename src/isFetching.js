import React from 'react';

export const IsFetching = () => {
  return (
    <div className="app">
      <header>
        <div className="nes-container is-rounded with-title">

          <h1 className="title">
            <span className="nes-badge">
              <span className="is-error">
                Waiting...
              </span>
            </span>
          </h1>

          <p>
            Poking the API server. Might take 5 seconds to get it running.
          </p>

        </div>
      </header>
    </div>
  )
}