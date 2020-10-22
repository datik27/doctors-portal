import React from 'react';

const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Abid Dental Care</a>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div class="navbar-nav ml-auto">
         <a class="nav-link mr-5 active" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-link mr-5" href="#">About</a>
        <a class="nav-link mr-5" href="#">Service</a>
        <a class="nav-link mr-5" href="#">Blog</a>
         <a class="nav-link mr-5" href="#">Contact</a>
        </div>
        </div>
      </nav>
            
        </div>
    );
};

export default Navbar;