// src/pages/HomePage.jsx
import React from 'react';
import '../styles/homepage.css'; // Ensure Tailwind CSS is imported

const HomePage = () => {
    return (
        <div className="font-sans ">
            {/* Navigation */}
            <nav className="flex justify-between items-center bg-white shadow-md p-4">
                <div className="text-2xl font-bold text-blue-600">Digital Startklar</div>
                <ul className="flex space-x-6 text-gray-700">
                    <li><a href="#home" className="hover:text-blue-500">Homepage</a></li>
                    <li><a href="#services" className="hover:text-blue-500">Dienstleistungen</a></li>
                    <li><a href="#testimonials" className="hover:text-blue-500">Testimonials</a></li>
                </ul>
                <div className="text-sm text-gray-500">
                    <p>Email: kontakt@bobagentur.de</p>
                    <p>Tel: +49 123 456789</p>
                </div>
            </nav>

            <section className="test-fix">

                {/* Hero Section */}
                <section id="home" className="bg-gradient-to-r from-blue-50 to-white py-20 text-center">
                    <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Webdesign. Social Media. Markenaufbau.</h1>
                    <p className="text-xl text-gray-600 mb-8">Professionelle Lösungen für dein digitales Business.</p>
                    <a href="#kontakt" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                        Jetzt Kontakt aufnehmen
                    </a>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 bg-gray-50">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Unsere Dienstleistungen</h2>
                    <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Kombipaket</h3>
                            <p className="text-gray-600">Webseite + Social Media + Branding im Komplettpaket – perfekt auf dich zugeschnitten.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Social Media</h3>
                            <p className="text-gray-600">LinkedIn Posts, Copywriting, Google Ads, Branding und mehr – wir kümmern uns um deinen Auftritt.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Webseite</h3>
                            <p className="text-gray-600">Template- oder individuelle Webseiten inkl. Hosting, Domain & technischer Umsetzung.</p>
                        </div>
                    </div>
                </section>



                {/* Testimonials Placeholder */}
                <section id="testimonials" className="py-16 bg-white text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Was unsere Kunden sagen</h2>
                    <p className="text-gray-500">Testimonials folgen bald...</p>
                </section>

            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-6">
                <p>&copy; 2025 Digital-Startklar Agentur. Alle Rechte vorbehalten.</p>
                <p className="text-sm mt-2">
                    <a href="/impressum" className="underline mr-4">Impressum</a>
                    <a href="/datenschutz" className="underline">Datenschutz</a>
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
