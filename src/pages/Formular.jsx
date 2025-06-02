// src/pages/Formular.jsx
import React, { useState } from 'react';

const templates = [
  { id: 'templateA', label: 'Template A', url: 'https://template-a.digitalstartklar.de', img: 'https://via.placeholder.com/150x100?text=Template+A' },
  { id: 'templateB', label: 'Template B', url: 'https://template-b.digitalstartklar.de', img: 'https://via.placeholder.com/150x100?text=Template+B' },
  { id: 'individual', label: 'Individuell', description: 'Wir gestalten deine Website maßgeschneidert nach deinen Anforderungen – 100% einzigartig.' }
];

const extras = [
  {
    id: 'extraA',
    label: 'Google Maps Sichtbarkeit',
    description: 'Wir machen Ihr Unternehmen auf Google Maps sichtbar – inkl. Einrichtung & Optimierung.',
  },
  {
    id: 'extraB',
    label: 'Professionelle E-Mail-Adresse',
    description: 'Eigene geschäftliche E-Mail inkl. Einrichtung und Geräteanbindung.',
  },
  {
    id: 'extraC',
    label: 'Online-Terminbuchung',
    description: 'Direkte Online-Terminvereinbarung für Ihre Kunden rund um die Uhr.',
  },
  {
    id: 'extraD',
    label: 'Social Media Startklar',
    description: 'Einrichtung Ihrer Profile (Instagram, TikTok, LinkedIn etc.) inkl. Verknüpfung mit Ihrer Website.',
  }
];


const budgets = [
  'unter 1.000 €',
  '1.000 – 2.500 €',
  '2.500 – 5.000 €',
  'über 5.000 €'
];

const timelineOptions = [
  'Schnellstmöglich',
  '1–2 Wochen',
  '1 Monat',
  'Flexibel / Noch nicht sicher'
];

const Formular = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    note: '',
    budget: '',
    timeline: ''
  });
  const [error, setError] = useState('');

  const handleTemplateSelect = (id) => {
    setSelectedTemplate(id);
    setError('');
  };

  const handleExtraToggle = (id) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTemplate) {
      setError('Bitte wählen Sie mindestens eine Template-Option aus.');
      return;
    }
    console.log({ selectedTemplate, selectedExtras, ...formData });
    alert('Formular erfolgreich abgeschickt!');
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Projektanfrage</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name / Unternehmen *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">E-Mail *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
          />
        </div>

        {/* Projektzeitraum */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Gewünschter Projektzeitraum (optional)</label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
          >
            <option value="">Bitte wählen</option>
            {timelineOptions.map((option, idx) => (
              <option key={idx} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/* Template Auswahl */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Wähle ein Template *</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((tpl) => (
              <div
                key={tpl.id}
                className={`border rounded-md p-3 transition cursor-pointer ${selectedTemplate === tpl.id ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                  }`}
                onClick={() => handleTemplateSelect(tpl.id)}
              >
                {/* Box-Inhalt (Label + Description) */}
                <div className="font-bold text-blue-700 mb-1">{tpl.label}</div>
                {tpl.description && <p className="text-sm text-gray-600 mb-3">{tpl.description}</p>}

                {/* Bild und Link getrennt von der Box und nicht klickbar */}
                {tpl.img && (
                  <div className="mb-2">
                    <img src={tpl.img} alt={tpl.label} className="rounded-md w-full h-auto pointer-events-none select-none" />
                  </div>
                )}
                {tpl.url && (
                  <a
                    href={tpl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-blue-500 hover:text-blue-700 block mt-1"
                    onClick={(e) => e.stopPropagation()} // Verhindert, dass Klick auf Link Auswahl auslöst
                  >
                    Template anschauen
                  </a>
                )}
              </div>
            ))}
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Zusatzoptionen */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Zusatzoptionen (optional)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {extras.map((extra) => (
              <label
                key={extra.id}
                className="flex items-start space-x-4 p-4 border rounded-md cursor-pointer hover:shadow-md transition-shadow duration-300"
              >
                <input
                  type="checkbox"
                  checked={selectedExtras.includes(extra.id)}
                  onChange={() => handleExtraToggle(extra.id)}
                  className="form-checkbox h-5 w-5 text-blue-600 mt-1"
                />
                <div>
                  <div className="font-semibold text-blue-700">{extra.label}</div>
                  <p className="text-gray-700 mt-1 leading-relaxed max-w-md">{extra.description}</p>
                  <p className="text-blue-600 font-bold mt-2">{extra.price}</p>
                </div>
              </label>
            ))}

          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Geschätzte Budgetrahmen (optional)</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
          >
            <option value="">Bitte wählen</option>
            {budgets.map((range, idx) => (
              <option key={idx} value={range}>{range}</option>
            ))}
          </select>
        </div>

        {/* Bemerkung */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Zusätzliche Informationen oder Wünsche</label>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows="4"
            placeholder="z. B. bevorzugte Farben, spezielle Funktionen oder Designwünsche"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full md:w-auto"
        >
          Anfrage absenden
        </button>
      </form>
    </div>
  );
};

export default Formular;
