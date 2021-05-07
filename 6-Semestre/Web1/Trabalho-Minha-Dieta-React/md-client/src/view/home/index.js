import React from 'react';
import NavBar from '../../component/navbar';
import Postcard from '../../component/postcard';
import './home.css';


function Home() {
    return(
        <>
            <NavBar active="inicio"/>
            <div className="inicio main p-lg-5 p-md-3 p-sm-1 row m-0">
                <h2>5 de maio de 2021</h2>
                <h5 className="text-success">Quarta feira</h5>
                <hr className="separete" />
                <Postcard />
                <Postcard />
                <Postcard />
                <Postcard />
                <h2 className="mt-5">6 de maio de 2021</h2>
                <h5 className="text-success">Quinta feira</h5>
                <hr className="separete" />
                <Postcard />
                <Postcard />
            </div>
        </>
    );
}

export default Home;