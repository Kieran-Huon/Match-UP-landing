'use client';

import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import '@/app/styles/main.css';


const tabs = [
  { name: 'Équipe', link: '/Teams' },
];

const PrivacyPolicy = () => (
  <div className="blur-bkg min-h-screen">
    <div className="wrapper -large -padded flex flex-col min-h-screen">
      <Header tabs={tabs} />

      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="max-w-3xl w-full text-white">
          <h1 className="text-4xl font-extrabold mb-8 text-center">Politique de confidentialité & CGV</h1>
          <p className="mb-6 text-xl text-center">
            Cette politique de confidentialité décrit comment Match’UP collecte, utilise et protège vos informations lors de l’utilisation de notre application.
          </p>

          {/* ...Politique classique déjà présente... */}
          <h2 className="text-2xl font-bold mt-10 mb-3 text-green">1. Données collectées</h2>
          <p className="mb-6">
            Match’UP ne collecte pas d’informations personnelles sensibles sans votre consentement. Certaines données anonymes (par exemple, données d’utilisation ou statistiques) peuvent être recueillies pour améliorer l’expérience utilisateur.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3 text-green">2. Utilisation des données</h2>
          <p className="mb-6">
            Les données collectées servent uniquement à l’amélioration du service et ne sont jamais revendues à des tiers.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3 text-green">3. Partage des données</h2>
          <p className="mb-6">
            Nous ne partageons aucune donnée personnelle avec des tiers, sauf obligation légale.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3 text-green">4. Cookies et technologies similaires</h2>
          <p className="mb-6">
            L’application peut utiliser des cookies ou technologies similaires pour améliorer l’expérience utilisateur.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3 text-green">5. Sécurité</h2>
          <p className="mb-6">
            Nous mettons en œuvre des mesures pour protéger vos données contre tout accès non autorisé.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3 text-green">6. Droits des utilisateurs</h2>
          <p className="mb-6">
            Vous pouvez nous contacter à tout moment pour demander la suppression ou la modification de vos données.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3 text-green">7. Droits sur les images</h2>
          <p className="mb-6">
            Toutes les images utilisées dans l’application Match’UP sont soit libres de droits, soit utilisées avec l’autorisation de leurs auteurs. Si vous pensez qu’une image utilisée viole vos droits, veuillez nous contacter afin que nous puissions la retirer ou la modifier.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-3 text-green">8. Contact</h2>
          <p className="mb-6">
            Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à :{" "}
            <a href="mailto:contact@matchup-app.com" className="underline text-blue-300 hover:text-green">
              axelblanchard@icloud.com
            </a>
          </p>

          {/* ----------- AJOUT CGV/PREMIUM ----------- */}
          <h2 className="text-4xl font-extrabold mt-16 mb-8 text-center text-blue-400">
            Conditions Générales de Vente (CGV) - Abonnement Premium
          </h2>

          <h3 className="text-2xl font-bold mt-10 mb-3 text-green">Abonnement Premium</h3>
          <ul className="mb-6 list-disc pl-6 text-lg">
            <li>Accès prioritaire aux matchs populaires</li>
            <li>Visibilité renforcée de votre profil</li>
            <li>Création de matchs &quot;privés&quot; ou &quot;filtrés&quot;</li>
            <li>Statistiques personnelles et historiques des rencontres</li>
          </ul>

          <p className="mb-6">
            Les détails, tarifs et modalités d’abonnement sont accessibles directement depuis l’application.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-3 text-green">Paiement et résiliation</h3>
          <ul className="mb-6 list-disc pl-6 text-lg">
            <li>Paiement sécurisé par carte bancaire ou tout autre moyen proposé.</li>
            <li>L’abonnement est reconduit automatiquement (mensuellement ou annuellement selon l’option choisie), sauf résiliation par l’utilisateur dans son espace personnel.</li>
            <li>Aucun remboursement ne sera accordé pour un mois/année déjà entamé, même en cas de non-utilisation.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-3 text-green">Limites de responsabilité</h3>
          <ul className="mb-6 list-disc pl-6 text-lg">
            <li>
              Match’Up ne garantit pas que l’abonnement premium permette de jouer plus souvent ou d’assurer la présence de joueurs à un match. Ce service améliore l’expérience utilisateur mais ne garantit pas des résultats concrets.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-3 text-green">Clause de non-responsabilité étendue</h3>
          <p className="mb-6">
            En utilisant Match’Up, l’utilisateur reconnaît être pleinement responsable de sa participation aux matchs, de sa sécurité, de son comportement et de ses échanges avec les autres membres.<br />
            Match’Up décline toute responsabilité en cas de blessure, litige, incident, ou dommage matériel/physique lors d’une rencontre sportive.
          </p>
          {/* ---------------------------------------- */}

          <p className="text-sm text-gray-300 mt-12 text-right">
            Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </section>
      </main>

      <Footer />
    </div>
  </div>
);

export default PrivacyPolicy;
