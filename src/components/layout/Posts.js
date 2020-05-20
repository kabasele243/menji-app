import React from 'react'


function Posts() {
    return (
      <div id="Post">
        	<article className="post">
								<header>
									<div className="title">
										<h2><a href="single.html">Magna sed adipiscing</a></h2>
										<p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
									</div>+
									<div className="meta">
										<time className="published" datetime="2015-11-01">November 1, 2015</time>
										<a href="https://menji.netlify.app" className="author"><span className="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
									</div>
								</header>
								<a href="single.html" className="image featured" ><img src="images/pic01.jpg" alt="" /></a>
								<p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
								<footer>
									<ul className="actions">
										<li><a href="single.html" className="button large">Continue Reading</a></li>
									</ul>
									<ul className="stats">
										<li><a href="https://menji.netlify.app" >General</a></li>
										<li><a href="https://menji.netlify.app" className="icon solid fa-heart">28</a></li>
										<li><a href="https://menji.netlify.app" className="icon solid fa-comment">128</a></li>
									</ul>
								</footer>
							</article>

						{/* <!-- Post --> */}
							<article className="post">
								<header>
									<div className="title">
										<h2><a href="single.html">Ultricies sed magna euismod enim vitae gravida</a></h2>
										<p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
									</div>
									<div className="meta">
										<time className="published" datetime="2015-10-25">October 25, 2015</time>
										<a href="https://menji.netlify.app" className="author"><span className="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
									</div>
								</header>
								<a href="single.html" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
								<p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper.</p>
								<footer>
									<ul className="actions">
										<li><a href="single.html" className="button large">Continue Reading</a></li>
									</ul>
									<ul className="stats">
										<li><a href="https://menji.netlify.app">General</a></li>
										<li><a href="https://menji.netlify.app" className="icon solid fa-heart">28</a></li>
										<li><a href="https://menji.netlify.app" className="icon solid fa-comment">128</a></li>
									</ul>
								</footer>
							</article>

						{/* <!-- Post --> */}
							<article className="post">
								<header>
									<div className="title">
										<h2><a href="single.html">Euismod et accumsan</a></h2>
										<p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
									</div>
									<div className="meta">
										<time className="published" datetime="2015-10-22">October 22, 2015</time>
										<a href="https://menji.netlify.app" className="author"><span className="name">Jane Doe</span><img src="images/avatar.jpg" alt="" /></a>
									</div>
								</header>
								<a href="single.html" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
								<p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula.</p>
								<footer>
									<ul className="actions">
										<li><a href="single.html" className="button large">Continue Reading</a></li>
									</ul>
									<ul className="stats">
										<li><a href="https://menji.netlify.app">General</a></li>
										<li><a href="https://menji.netlify.app" className="icon solid fa-heart">28</a></li>
										<li><a href="https://menji.netlify.app" className="icon solid fa-comment">128</a></li>
									</ul>
								</footer>
							</article>
      </div>
    );
  }

export default Posts