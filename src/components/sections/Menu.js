import React from 'react'


function Menu() {
    return (
        <section id="menu">

        {/* <!-- Search --> */}
            <section>
                <form className="search" method="get" action="#">
                    <input type="text" name="query" placeholder="Search" />
                </form>
            </section>

        {/* <!-- Links --> */}
            <section>
                <ul className="links">
                    <li>
                        <a href="https://menji.netlify.app">
                            <h3>Lorem ipsum</h3>
                            <p>Feugiat tempus veroeros dolor</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://menji.netlify.app">
                            <h3>Dolor sit amet</h3>
                            <p>Sed vitae justo condimentum</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://menji.netlify.app">
                            <h3>Feugiat veroeros</h3>
                            <p>Phasellus sed ultricies mi congue</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://menji.netlify.app">
                            <h3>Etiam sed consequat</h3>
                            <p>Porta lectus amet ultricies</p>
                        </a>
                    </li>
                </ul>
            </section>

        {/* <!-- Actions --> */}
            <section>
                <ul className="actions stacked">
                    <li><a href="https://menji.netlify.app" className="button large fit">Log In</a></li>
                </ul>
            </section>

    </section>
    );
  }

export default Menu