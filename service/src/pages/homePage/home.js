import React from 'react';
import NavBar from '../../components/navbarUnit/navbar';

function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page of your application.</p>
            <NavBar currentPage="home" />
        </div>
    );
}

export default HomePage;