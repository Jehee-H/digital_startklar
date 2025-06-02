// src/pages/HomePage.jsx
import React from 'react';
import '../styles/homepage.css'; // Falls du eigenes CSS nutzt

const HomePage = () => {
    return (
        <div className="font-sans">
            

            <section className="test-fix">
                {/* Hero Section */}
                <section id="home" className="bg-gradient-to-r from-blue-50 to-white py-20 text-center">
                    <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Webdesign. Social Media. Markenaufbau.</h1>
                    <p className="text-xl text-gray-600 mb-8">Professionelle Lösungen für dein digitales Business.</p>
                    <a href="/formular" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                        Jetzt Kontakt aufnehmen
                    </a>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 bg-gray-50">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Unsere Dienstleistungen</h2>
                    <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Basis-Paket</h3>
                            <p className="text-gray-600">Moderne Website mit Vorlage, Texte, Bilder & Farben angepasst, mobil optimiert.</p>
                            <p className="text-sm text-gray-500 mt-2">ab 399 €</p>
                        </div>
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

                    <h3 className="text-2xl font-bold text-center text-blue-700 mt-16">Zusatzoptionen – flexibel erweiterbar</h3>
                    <div className="grid md:grid-cols-2 gap-6 mt-8 px-4 max-w-6xl mx-auto">
                        <div className="bg-white border-l-4 border-blue-500 p-4 shadow">
                            <h4 className="font-bold text-lg">🅰️ Google Maps Sichtbarkeit</h4>
                            <p>Wir machen Ihr Unternehmen auf Google Maps sichtbar – inkl. Einrichtung & Optimierung.</p>
                            <p className="mt-2 font-semibold">+49 €</p>
                        </div>
                        <div className="bg-white border-l-4 border-blue-500 p-4 shadow">
                            <h4 className="font-bold text-lg">🅱️ Professionelle E-Mail-Adresse</h4>
                            <p>Eigene geschäftliche E-Mail inkl. Einrichtung und Geräteanbindung.</p>
                            <p className="mt-2 font-semibold">+69 €</p>
                        </div>
                        <div className="bg-white border-l-4 border-blue-500 p-4 shadow">
                            <h4 className="font-bold text-lg">🅲️ Online-Terminbuchung</h4>
                            <p>Direkte Online-Terminvereinbarung für Ihre Kunden rund um die Uhr.</p>
                            <p className="mt-2 font-semibold">+89 €</p>
                        </div>
                        <div className="bg-white border-l-4 border-blue-500 p-4 shadow">
                            <h4 className="font-bold text-lg">🅳️ Social Media Startklar</h4>
                            <p>Einrichtung Ihrer Profile (Instagram, TikTok, LinkedIn etc.) inkl. Verknüpfung mit Ihrer Website.</p>
                            <p className="mt-2 font-semibold">+59 €</p>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Individuelle Wünsche?</h4>
                        <p className="text-gray-600">Designfunktionen, Animationen, Mehrsprachigkeit oder Shops – gerne auf Anfrage!</p>
                        <p className="text-sm text-gray-500 mt-1">Preise je nach Umfang individuell</p>
                    </div>
                </section>

                {/* Testimonials Placeholder */}
                <section id="testimonials" className="py-16 bg-white text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Was unsere Kunden sagen</h2>
                    <p className="text-gray-500">Testimonials folgen bald...</p>
                </section>
            </section>

        </div>
    );
};

export default HomePage;

