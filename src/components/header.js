import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';


function Header() {

    const handleProfileClick = () => {
        // Profil resmi tıklandığında yapılacak işlemler
        console.log('Profil resmi tıklandı');
    };

    const handleCartClick = () => {
        // Sepet resmi tıklandığında yapılacak işlemler
        console.log('Sepet resmi tıklandı');
    };


    return (

        <>
            <div className="navbar">
                <div className="navbar-left">
                    <span className="navbar-text">BURGER BRAND</span>
                </div>
                <div className="navbar-right">
                    <img
                        className="navbar-icon"
                        src= '../../assets/user-icon.png'
                        alt="Profile"
                        onClick={handleProfileClick}
                    />
                    <img
                        className="navbar-icon"
                        src="../src/assets/shopping-cart.png"
                        alt="Cart"
                        onClick={handleCartClick}
                    />
                </div>
            </div>

        </>
    )
}

export default Header

