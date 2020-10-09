import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light pt-5">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link mr-80" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item mr-80">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item mr-80">
            <a class="nav-link" href="#">
              Dental Services
            </a>
          </li>
          <li class="nav-item mr-80">
            <a class="nav-link text-white" href="#">
              Reviews
            </a>
          </li>
          <li class="nav-item mr-80">
            <a class="nav-link text-white" href="#">
              Blog
            </a>
          </li>
          <li class="nav-item mr-80">
            <a class="nav-link text-white" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
