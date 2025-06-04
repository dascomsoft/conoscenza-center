


import React from 'react';
import { FaUsers, FaBullseye, FaAward, FaGlobe, FaHeart, FaBookOpen } from 'react-icons/fa';
import { useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const About = () => {


    useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);



  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-xl md:text-3xl font-bold mb-6 animate-fade-in">
                À Propos de 
                <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  La Conoscenza
                </span>
              </h1>
              <p className="text-xl  text-blue-100 animate-fade-in">
                Votre passerelle vers le multilinguisme depuis 2010
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white" data-aos="fade-up" data-aos-delay="200">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Notre Mission</h2>
                <p className=" text-gray-600 mb-6">
                  Chez La Conoscenza, nous croyons que les langues sont des ponts qui connectent les cultures 
                  et ouvrent des horizons infinis. Notre mission est de rendre l'apprentissage des langues 
                  accessible, engageant et transformateur pour tous.
                </p>
                <p className=" text-gray-600 mb-8">
                  Situé au cœur de Simbock à Yaoundé, notre centre linguistique offre un environnement 
                  d'apprentissage moderne et bienveillant où chaque apprenant peut développer ses 
                  compétences linguistiques à son rythme.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaBullseye className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Excellence pédagogique</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FaHeart className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Approche bienveillante</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-last">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Étudiants en classe"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50" data-aos="fade-up" data-aos-delay="200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nos Valeurs</h2>
              <p className=" text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident notre approche pédagogique <br /> et notre relation avec nos apprenants
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaGlobe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ouverture Culturelle</h3>
                <p className="text-gray-600">
                  Nous célébrons la diversité culturelle et encourageons nos apprenants à découvrir 
                  de nouveaux horizons à travers les langues.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation Pédagogique</h3>
                <p className="text-gray-600">
                  Nous utilisons des méthodes d'enseignement modernes et interactives pour 
                  optimiser l'apprentissage et maintenir la motivation.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaAward className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Qualité & Excellence</h3>
                <p className="text-gray-600">
                  Nous nous engageons à offrir des formations de haute qualité avec des 
                  professeurs qualifiés et des programmes certifiés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Notre Équipe</h2>
              <p className=" text-gray-600 max-w-3xl mx-auto">
                Des professeurs passionnés et expérimentés, dédiés à votre réussite
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Professeur en ligne"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Une équipe d'experts multilingues</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Notre équipe est composée de professeurs natifs et bilingues, tous diplômés et 
                  expérimentés dans l'enseignement des langues étrangères. Chaque membre de notre 
                  équipe apporte sa passion et son expertise pour créer une expérience d'apprentissage 
                  unique et enrichissante.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <FaUsers className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">15+ Professeurs qualifiés</h4>
                      <p className="text-gray-600">Experts dans leur langue maternelle</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <FaAward className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Formation continue</h4>
                      <p className="text-gray-600">Méthodes pédagogiques actualisées</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <FaHeart className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Accompagnement personnalisé</h4>
                      <p className="text-gray-600">Suivi individualisé de chaque apprenant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



 {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold mb-4">Pourquoi choisir La Conoscenza ?</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Plus qu'un centre de langues, une expérience d'apprentissage transformatrice
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">13+</div>
                <div className="text-lg">Années d'expérience</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">7</div>
                <div className="text-lg">Langues enseignées</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-lg">Étudiants formés</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-lg">Taux de satisfaction</div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Étudiant avec ordinateur portable"
                className="rounded-lg shadow-xl w-full max-w-4xl mx-auto h-[300px] object-cover"
              />
            </div>
          </div>
        </section>


         {/* CTA Section */}
        <section className="py-20 bg-orange-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Prêt à commencer votre voyage linguistique ?
            </h2>
            <p className=" text-orange-100 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté d'apprenants et découvrez le plaisir d'apprendre une nouvelle langue
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Nous contacter
              </a>
              <a 
                href="#cours" 
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-300 transform hover:scale-105"
              >
                Voir nos cours
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default About;













































