// src/components/Header.jsx
import React from 'react';

const Header = () => {
    return (
        <nav className="flex justify-between items-center bg-white shadow-md p-4">

            <div className='flex items-center space-x-3'>
                <div className="flex items-end space-x-2 w-fit">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="w-4 h-8 bg-blue-600 rounded-full"></div>
                    <div className="w-4 h-12 bg-blue-600 rounded-full"></div>
                </div>

                <div className='flex flex-col'>
                    <div className="text-2xl font-bold ">Digital </div>
                    <div className="text-2xl font-bold text-blue-600">Startklar </div>
                </div>
            </div>

            <ul className="flex space-x-6 text-gray-700">
                <li><a href="/" className="hover:text-blue-500">Homepage</a></li>
                <li><a href="#services" className="hover:text-blue-500">Dienstleistungen</a></li>
                <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
            </ul>
            <div className="text-sm text-gray-500">
                <p>Email: kontakt@digitalstartklar.de</p>
                <p>Tel: +49 123 456789</p>
            </div>
        </nav>
    );
};

export default Header;
