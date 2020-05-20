import React from 'react'


function Header() {
    return (
      <div id="header">
        	<h1><a href="index.html">Menji-Magazine</a></h1>
						<nav className="links">
							<ul>
								<li><a href="https://menji.netlify.app">Entrepreneuriat</a></li>
								<li><a href="https://menji.netlify.app">Inspiration</a></li>
								<li><a href="https://menji.netlify.app">Story</a></li>
								<li><a href="https://menji.netlify.app">Lecture</a></li>
							</ul>
						</nav>
						<nav className="main">
							<ul>
								<li className="search">
									<a className="fa-search" href="#search">Search</a>
									<form id="search" method="get" action="#">
										<input type="text" name="query" placeholder="Search" />
									</form>
								</li>
								<li className="menu">
									<a className="fa-bars" href="#menu">Menu</a>
								</li>
							</ul>
						</nav>
      </div>
    );
  }

export default Header