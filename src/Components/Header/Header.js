import React from 'react';
import './Header.css'

const Header = ({count}) => {
    return (
        <div className='container d-flex justify-content-between'>
            <h3 className='p-2 m-2'>The Fake Api React Store</h3>
            <nav>
                <li className='p-2 m-2'><a href="">Home</a></li>
                <li className='p-2 m-2'><a href="">Cart <sup className='fw-bold'>{count?count:''}</sup></a></li>
                <li className='p-2 m-2'><a href="">About Us</a></li>
                <li className='p-2 m-2'><a href="">Contact</a></li>
            </nav>
        </div>
    );
};

export default Header;