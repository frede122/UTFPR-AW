import React from 'react';
import NavBar from '../../component/navbar';
import Postcard from '../../component/postcard';
import './home.css';


function Home() {
    return(
        <>
            <NavBar active="inicio"/>
            <h1>Home page!</h1>
            <div className="row m-0">
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
            </div>
        </>
    );
}

export default Home;