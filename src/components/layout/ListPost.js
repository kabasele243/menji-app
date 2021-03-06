import React from 'react'


function ListPost() {
    return (
        <section>
        <ul className="posts">
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">Lorem ipsum fermentum ut nisl vitae</a></h3>
                        <time className="published" datetime="2015-10-20">October 20, 2015</time>
                    </header>
                    <a href="single.html" className="image"><img src="images/pic08.jpg" alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">Convallis maximus nisl mattis nunc id lorem</a></h3>
                        <time className="published" datetime="2015-10-15">October 15, 2015</time>
                    </header>
                    <a href="single.html" className="image"><img src="images/pic09.jpg" alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">Euismod amet placerat vivamus porttitor</a></h3>
                        <time className="published" datetime="2015-10-10">October 10, 2015</time>
                    </header>
                    <a href="single.html" className="image"><img src="images/pic10.jpg" alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">Magna enim accumsan tortor cursus ultricies</a></h3>
                        <time className="published" datetime="2015-10-08">October 8, 2015</time>
                    </header>
                    <a href="single.html" className="image"><img src="images/pic11.jpg" alt="" /></a>
                </article>
            </li>
            <li>
                <article>
                    <header>
                        <h3><a href="single.html">Congue ullam corper lorem ipsum dolor</a></h3>
                        <time className="published" datetime="2015-10-06">October 7, 2015</time>
                    </header>
                    <a href="single.html" className="image"><img src="images/pic12.jpg" alt="" /></a>
                </article>
            </li>
        </ul>
    </section>
    );
  }

export default ListPost