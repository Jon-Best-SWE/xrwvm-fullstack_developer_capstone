import React from 'react';
import "../assets/style.css";
import "../assets/bootstrap.min.css";

const Header = () => {
    const logout = async (e) => {
    e.preventDefault();
    let logout_url = window.location.origin+"/djangoapp/logout";
    const res = await fetch(logout_url, {
      method: "GET",
    });

    const json = await res.json();
    if (json) {
      let username = sessionStorage.getItem('username');
      sessionStorage.removeItem('username');
      window.location.href = window.location.origin;
      window.location.reload();
      alert("Logging out "+username+"...")
    }
    else {
      alert("The user could not be logged out.")
    }
  };

//The default home page items are the login details panel
let home_page_items =  <div></div>

//Gets the username in the current session
let curr_user = sessionStorage.getItem('username')

//If the user is logged in, show the username and logout option on home page
if ( curr_user !== null &&  curr_user !== "") {
    home_page_items = <div className="input_panel">
      <text className='username'>{sessionStorage.getItem("username")}</text>
    <a className="nav_item" href="/djangoapp/logout" onClick={logout}>Logout</a>
  </div>
}
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark shadow-lg"
            style={{
              background: "linear-gradient(90deg, #0f172a, #1e3a8a)",
              padding: "18px 0",
              borderBottom: "3px solid #38bdf8"
            }}>
            <div className="container">
              <a
              className="navbar-brand fw-bold fs-3 text-white"
              href="/"
              style={{
                letterSpacing: "1px",
                textTransform: "uppercase",
                whiteSpace: "nowrap"
              }}>
                Apex Platinum Auto Group
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ms-auto align-items-center">
                  <li class="nav-item">
                    <a className="nav-link fs-5 text-white" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a className="nav-link fs-5 text-white" href="/about">About Us</a>
                  </li>
                  <li class="nav-item">
                    <a className="nav-link fs-5 text-white" href="/contact">Contact Us</a>
                  </li>
                </ul>
                <span class="navbar-text">
                  <div className="d-flex align-items-center gap-3" id="loginlogout">
                  {home_page_items}
                  </div>
                  </span>
              </div>
            </div>
          </nav>
        </div>
    )
}

export default Header
