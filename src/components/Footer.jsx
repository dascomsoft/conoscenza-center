import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-xl mr-3">C</div>
              <div>
                <h2 className="text-xl font-bold">La Conoscenza</h2>
                <p className="text-sm text-blue-200">Centre Linguistique Des Langues</p>
              </div>
            </div>
            <p className="text-blue-200 mb-4">
              Notre mission est de rendre l'apprentissage des langues accessible à tous, avec qualité et professionnalisme.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-white transition">Accueil</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-white transition">À propos</a></li>
              <li><a href="#courses" className="text-blue-200 hover:text-white transition">Nos cours</a></li>
              <li><a href="#pricing" className="text-blue-200 hover:text-white transition">Tarifs</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">Abonnez-vous pour recevoir nos dernières actualités et offres spéciales.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none flex-grow" 
              />
              <button 
                type="submit" 
                className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-r-md transition"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
            <p className="text-xs text-blue-300 mt-2">Nous respectons votre vie privée.</p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Centre Linguistique Des Langues La Conoscenza, Yaoundé. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition">Mentions légales</a>
            <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer