import React from 'react';

function Nav() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="navbar-brand"></div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active me-5" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active me-5" aria-current="page" href="#">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active me-5" aria-current="page" href="#">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active me-5" aria-current="page" href="#">Contact me</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav;
