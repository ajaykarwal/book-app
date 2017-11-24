import React from 'react';
import '../../CSS/Header.css';

const Header = (props) => {
    return (
        <header class="site-header">
            <div class="container">
                <h1><a href="/">Site Name</a></h1>
                <p>Site Description</p>
            </div>
        </header>
    )
}
 
export default Header;