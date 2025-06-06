import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { useEffect } from 'react';




const ContactSection = () => {

    useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ajouter ici la logique pour envoyer les données du formulaire
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            Contactez<span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Nous
            </span>
          </h2>
          <p className=" text-gray-300 max-w-3xl mx-auto">
            Prêt à commencer votre aventure linguistique ? Nous <br /> sommes là pour vous accompagner
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Nos Coordonnées</h3>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <FaMapMarkerAlt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Adresse</h4>
                <p className="text-gray-300">
                  Simbock, Yaoundé<br />
                  Cameroun
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <FaPhoneAlt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Téléphone</h4>
                <a href="tel:+237123456789" className="text-gray-300 hover:text-green-400 transition-colors">
                  +237 652226323
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <a href="mailto:conoscenzacenter@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                  conoscenzacenter@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <FaWhatsapp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">WhatsApp</h4>
                <a
                  href="https://wa.me/237652226323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 cursor-pointer hover:text-green-400 transition-colors"
                >
                  Contactez-nous sur WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Demande d'Informations</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="+237 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="language" className="block text-sm font-medium mb-2">
                    Langue d'intérêt
                  </label>
                  <select
                    id="language"
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option value="">Choisir une langue</option>
                    <option value="italien">Italien</option>
                    <option value="anglais">Anglais</option>
                    <option value="francais">Français</option>
                    <option value="allemand">Allemand</option>
                    <option value="espagnol">Espagnol</option>
                    <option value="chinois">Chinois</option>
                    <option value="portugais">Portugais</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Parlez-nous de vos objectifs d'apprentissage..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <FaPaperPlane className="w-5 h-5" />
                <span>Envoyer le message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;




































