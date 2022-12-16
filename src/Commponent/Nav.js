import React from 'react';
import PropTypes from 'prop-types';
import Sun from '../sun1.png';
import Moon from '../moon.png';

function Nav(props) {
  return (
    <>
     
        <nav class="navbar navbar-expand-lg " Style={`background-color: ${props.mode=='light'?'#9ad1f3':'#183748'};`}>
          {/* <div class="navbar-brand"></div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className=" w-100 container-fluid"  Style={`color: ${props.mode=='light'?'#fff':'#000'};`}>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className={`nav-link active me-5  ${props.mode=='light'?'text-body':'text-white'}`} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link active me-5  ${props.mode=='light'?'text-body':'text-white'}`} aria-current="page" href="#">Skills</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link active me-5  ${props.mode=='light'?'text-body':'text-white'}`} aria-current="page" href="#">Projects</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link active me-5 w-100 ${props.mode=='light'?'text-body':'text-white'}`} aria-current="page" href="#">Contact me</a>
                </li>
              </ul>
            </div>
            <div className='side_container'>
              <a onClick={props.Fun_mode}>
                {props.mode=='light'?<img className="mode_img" src={Moon}/>:<img className="mode_img" src={Sun}/>}
                {/* <img className="mode_img" src={props.mode=='light'?'Moon':'../sun1.png'}/> */}
                
              </a>

            </div>
          </div>
        </nav>
    
    </>
  )
}

export default Nav;
