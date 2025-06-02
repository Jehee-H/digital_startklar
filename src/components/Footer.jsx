// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center py-6">
            <p>&copy; 2025 Digital-Startklar Agentur. Alle Rechte vorbehalten.</p>
            <p className="text-sm mt-2">
                <a href="/impressum" className="underline mr-4">Impressum</a>
                <a href="/datenschutz" className="underline">Datenschutz</a>
            </p>
        </footer>
    );
};

export default Footer;
