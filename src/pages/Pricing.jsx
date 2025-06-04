



import React from 'react';
import { FaCheck, FaStar, FaBolt, FaCrown, FaHeart } from 'react-icons/fa';
import { useEffect } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

const Pricing = () => {

    useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);

  const pricingPlans = [
    {
      name: "Essentiel",
      subtitle: "Pour débuter",
      price: "45 000",
      period: "/mois",
      originalPrice: null,
      icon: FaHeart,
      color: "from-blue-500 to-blue-600",
      popular: false,
      features: [
        "8h de cours par mois",
        "Cours collectifs (max 12 personnes)",
        "Support pédagogique inclus",
        "Accès plateforme en ligne",
        "1 test de niveau",
        "Support par email"
      ]
    },
    {
      name: "Privilège",
      subtitle: "Le plus populaire",
      price: "75 000",
      period: "/mois",
      originalPrice: "85 000",
      icon: FaStar,
      color: "from-purple-500 to-purple-600",
      popular: true,
      features: [
        "16h de cours par mois",
        "Cours semi-collectifs (max 6 personnes)",
        "Support pédagogique premium",
        "Accès plateforme + app mobile",
        "2 tests de niveau",
        "Support prioritaire",
        "1 cours particulier/mois",
        "Certification incluse"
      ]
    },
    {
      name: "Excellence",
      subtitle: "Formation intensive",
      price: "120 000",
      period: "/mois",
      originalPrice: null,
      icon: FaCrown,
      color: "from-orange-500 to-orange-600",
      popular: false,
      features: [
        "25h de cours par mois",
        "Cours particuliers uniquement",
        "Programme personnalisé",
        "Accès plateforme premium",
        "Tests illimités",
        "Support 24/7",
        "Coaching individuel",
        "Préparation aux certifications",
        "Matériel premium inclus"
      ]
    }
  ];

  const additionalServices = [
    {
      service: "Cours particulier (1h)",
      price: "15 000 FCFA",
      description: "Cours individuel avec professeur certifié"
    },
    {
      service: "Test de niveau",
      price: "Gratuit",
      description: "Évaluation complète de vos compétences"
    },
    {
      service: "Préparation certification",
      price: "25 000 FCFA",
      description: "Programme intensif de préparation aux examens"
    },
    {
      service: "Cours d'entreprise",
      price: "Sur devis",
      description: "Formation sur-mesure pour votre équipe"
    },
    {
      service: "Cours en ligne",
      price: "35 000 FCFA/mois",
      description: "Accès complet à notre plateforme digitale"
    },
    {
      service: "Immersion culturelle",
      price: "50 000 FCFA",
      description: "Weekend d'immersion avec activités culturelles"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-6">
            Nos <span className="text-yellow-400">Tarifs</span>
          </h1>
          <p className="mb-8 max-w-3xl mx-auto">
            Des formations de qualité à prix transparents. Choisissez l'offre qui <br /> correspond à vos besoins et votre budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">💰 Prix transparents</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🎯 Sans engagement</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">💳 Paiement flexible</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">🎁 Réductions disponibles</span>
          </div>
        </div>
      </section>

      {/* Plans de tarification */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Choisissez votre formule</h2>
            <p className=" text-gray-600 max-w-2xl mx-auto">
              Trois options pensées pour s'adapter à votre rythme d'apprentissage et votre budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative overflow-hidden p-3 hover:shadow-2xl transition-shadow duration-300 ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-3 font-bold">
                    ⭐ LE PLUS POPULAIRE ⭐
                  </div>
                )}

                <div className={`text-center ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{plan.name}</h2>
                  <p className="text-gray-600">{plan.subtitle}</p>

                  <div className="py-6">
                    <div className="flex items-center justify-center gap-2">
                      {plan.originalPrice && (
                        <span className=" text-gray-400 line-through">{plan.originalPrice}</span>
                      )}
                      <span className="font-bold text-gray-800">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold mt-2 inline-block">
                        Économisez {parseInt(plan.originalPrice.replace(/\s/g, '')) - parseInt(plan.price.replace(/\s/g, ''))} FCFA
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-semibold py-3`}>
                    {plan.popular ? 'Choisir ce plan' : 'Commencer maintenant'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Pricing;
