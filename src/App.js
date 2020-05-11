import React from 'react';
import './assets/css/main.css';
import './App.css';
import Header from './components/layout/Header';
import Menu from './components/sections/Menu';
import Posts from './components/layout/Posts';
import SideBar from './components/layout/SideBar';
import Pagination from './components/elements/Pagination';


function App() {
  return (
    <div className="App"> 
		{/* <!-- Wrapper --> */}
			<div id="wrapper">
					<Header/>
					<Menu/>
					<div id="main">
					<Posts/>
          <Pagination/>
					</div>
				  <SideBar/>
			</div>
    </div>
  );
}

export default App;
