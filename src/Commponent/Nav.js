import React from 'react';

function Nav() {
  return (
    <>
      {/* <div className="container"> */}
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="navbar-brand"></div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active me-5" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active me-5" aria-current="page" href="#">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active me-5" aria-current="page" href="#">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active me-5" aria-current="page" href="#">Contact me</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      {/* </div> */}
    </>
  )
}

export default Nav;
