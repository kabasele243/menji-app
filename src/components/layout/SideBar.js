import React from 'react';
import Logo from '../../images/logo/logo.png'
import MiniPost from './MiniPosts';
import ListPost from './ListPost';


function SideBar() {
    return (
        <section id="sidebar">
            <section id="intro">
                <a href="https://menji.netlify.app" className="logo"><img src={Logo} alt="logo menji magazine" /></a>
                <header>
                    <h2>Menji Magazine</h2>
                    <p>Promouvoir l'excellence.</p>
                </header>
            </section>
            <MiniPost/>
            <ListPost/>
            
        </section>
    );
  }

export default SideBar