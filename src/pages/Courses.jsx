




import React from 'react';
import { FaClock, FaUsers, FaBookOpen, FaGlobe, FaStar, FaChevronRight } from 'react-icons/fa';
import { useEffect } from 'react';
 import { Link } from 'react-router-dom';
 import language from '../assets/language.webp'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Courses = () => {

  
    useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);


  const languages = [
    {
      name: "Italien",
      flag: "🇮🇹",
      description: "La langue de la passion et de l'art",
      levels: ["Débutant", "Intermédiaire", "Avancé"],
      duration: "3-6 mois",
      students: "50",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Anglais",
      flag: "🇬🇧",
      description: "La langue internationale des affaires",
      levels: ["Débutant", "Intermédiaire", "Avancé", "Business"],
      duration: "2-8 mois",
      students: "30",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Français",
      flag: "🇫🇷",
      description: "La langue de la diplomatie et de la culture",
      levels: ["Débutant", "Intermédiaire", "Avancé"],
      duration: "3-6 mois",
      students: "15",
      image: language
    },
    {
      name: "Allemand",
      flag: "🇩🇪",
      description: "La langue de l'innovation et de la technologie",
      levels: ["Débutant", "Intermédiaire", "Avancé"],
      duration: "4-8 mois",
      students: "30",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Espagnol",
      flag: "🇪🇸",
      description: "La langue parlée par 500 millions de personnes",
      levels: ["Débutant", "Intermédiaire", "Avancé"],
      duration: "3-6 mois",
      students: "10",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Chinois",
      flag: "🇨🇳",
      description: "La langue du futur économique mondial",
      levels: ["Débutant", "Intermédiaire", "Avancé"],
      duration: "6-12 mois",
      students: "15",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const courseTypes = [
    {
      title: "Cours Collectifs",
      description: "Apprenez en groupe dans une ambiance conviviale",
      icon: FaUsers,
      features: ["6-12 personnes max", "Interaction dynamique", "Prix avantageux", "Émulation collective"],
      price: "À partir de 45 000 FCFA/mois"
    },
    {
      title: "Cours Particuliers",
      description: "Un accompagnement personnalisé selon vos besoins",
      icon: FaBookOpen,
      features: ["Programme sur-mesure", "Horaires flexibles", "Progression rapide", "Attention individuelle"],
      price: "À partir de 15 000 FCFA/heure"
    },
    {
      title: "Cours en Ligne",
      description: "Apprenez depuis chez vous avec nos experts",
      icon: FaGlobe,
      features: ["Plateforme interactive", "Supports numériques", "Flexibilité totale", "Suivi personnalisé"],
      price: "À partir de 35 000 FCFA/mois"
    },
    {
      title: "Cours Intensifs",
      description: "Programme accéléré pour résultats rapides",
      icon: FaClock,
      features: ["20h/semaine", "Immersion totale", "Résultats en 4 semaines", "Groupes réduits"],
      price: "À partir de 120 000 FCFA/mois"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-6">
            Nos <span className="text-yellow-400">Cours</span>
          </h1>
          <p className="mb-8 max-w-3xl mx-auto">
            Découvrez notre large gamme de formations linguistiques  <br />adaptées à tous les niveaux et tous les objectifs
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="bg-white/20 px-4 py-2 rounded-full">7 Langues</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">4 Formats</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">100+ Étudiants</span>
          </div>
        </div>
      </section>

      {/* Types de Cours */}
      <section className="py-20" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Types de Formations</h2>
            <p className=" text-gray-600 max-w-2xl mx-auto">
              Choisissez le format qui correspond le mieux à votre <br /> emploi du temps et vos objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
            {courseTypes.map((type, index) => (
              <div key={index} className="p-3 h-full hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{type.title}</h2>
                  <p className="text-gray-600">{type.description}</p>
                </div>
                <div>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <FaChevronRight className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <p className="font-semibold text-blue-600 mb-4">{type.price}</p>
                    <button className="w-full p-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      En savoir plus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Langues Enseignées */}
      <section className="py-20 bg-white" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Langues Enseignées</h2>
            <p className=" text-gray-600 max-w-2xl mx-auto">
              Explorez les cultures du monde à travers l'apprentissage des langues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <div key={index} className="shadow-xl overflow-hiddenhover:shadow-xl transition-shadow duration-300">
               
                <div className="h-48 overflow-hidden">
                  <img 
                    src={language.image} 
                    alt={language.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className='p-3'>
                  <h2 className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">{language.flag}</span>
                    {language.name}
                  </h2>
                  <p>{language.description}</p>
                </div>
                <div className='p-3'>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Niveaux:</span>
                      <span className="font-medium">{language.levels.length} niveaux</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Durée:</span>
                      <span className="font-medium">{language.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Étudiants:</span>
                      <span className="font-medium flex items-center gap-1">
                        <FaStar className="w-4 h-4 text-yellow-500" />
                        {language.students}
                      </span>
                    </div>
                  </div>
                  {/* <button className="w-full p-1 rounded-lg mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    En savoir plus
                  </button> */}
                  <div className='pt-3 pb-2'>
                    <a href="https://wa.me/237652226323"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full text-white p-2 rounded-lg bg-gradient-to-r from-orange-300 to-orange-600 hover:from-orange-600 hover:to-purple-700">
                      En savoir plus
                    </a>
                  </div>

            
               
                  
                </div>
               
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Courses;
