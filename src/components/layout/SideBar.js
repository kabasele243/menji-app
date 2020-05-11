import React from 'react';
import Logo from '../../images/logo/logo.png'
import Footer from './Footer';
import MiniPost from './MiniPosts';
import ListPost from './ListPost';


function SideBar() {
    return (
        <section id="sidebar">
            <section id="intro">
                <a href="#" className="logo"><img src={Logo} alt="logo menji magazine" /></a>
                <header>
                    <h2>Menji Magazine</h2>
                    <p>Promouvoir l'excellence.</p>
                </header>
            </section>
            <MiniPost/>
            <ListPost/>
            <Footer/>
        </section>
    );
  }

export default SideBar