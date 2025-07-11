import React, { useState } from 'react';
import Body from './body';
import Phone from './phone';

const ParentComponent: React.FC = () => {
    // Déclarez l'état par défaut pour le texte
    const defaultBodyText = {
        name: 'Match\'Up',
        description: 'Assemble ta team, découvre ton sport, explose tes limites !',
        image: '/path-to-default-image.png', // Image par défaut
        features: [
            // { name: 'Feature 1', description: 'Description de la feature 1' },
            // { name: 'Feature 2', description: 'Description de la feature 2' },
        ],
    };

    // Utilisez cet état pour le texte affiché
    const [bodyText, setBodyText] = useState(defaultBodyText);
    const [isFading, setIsFading] = useState(false);

    const changeTextWithTransition = (newText: typeof defaultBodyText) => {
        setIsFading(true); // Lancer le fade-out
        setTimeout(() => {
            setBodyText(newText); // Changer le texte après 300ms
            setIsFading(false);   // Lancer le fade-in après le changement
        }, 300);
    };

     const handleListClick = () => {
        changeTextWithTransition({
            name: 'Liste des Matchs',
            description: 'Découvre les matchs près de chez toi et rejoins l\'action en un instant !',
            image: '/path-to-list-image.png',
            features: [
                // { name: 'Football', description: 'Matchs de football disponibles' },
            ],
        });
    };

    const handleProfileClick = () => {
        changeTextWithTransition({
            name: 'Profil de l\'Utilisateur',
            description: 'Ton profil, ton terrain de jeu : affiche tes compétences et trouve tes meilleurs partenaires !',
            image: '/path-to-profile-image.png',
            features: [
                // { name: 'Utilisateur', description: 'Nom : Alexis' },
            ],
        });
    };

    const handleCreateClick = () => {
        changeTextWithTransition({
            name: 'Créer un Match',
            description: 'Prêt à relever le défi ? Crée ton match en un clic et joue dès maintenant !',
            image: '/path-to-profile-image.png',
            features: [
                // { name: 'Utilisateur', description: 'Nom : Alexis' },
            ],
        });
    };

    // Fonction pour réinitialiser le texte à son état par défaut
    const handleResetText = () => {
        changeTextWithTransition(defaultBodyText);
    };

    return (
        <div>
            <Body body={[bodyText]} isFading={isFading} phoneComponent={
                <Phone
                    onListClick={handleListClick}
                    onCreateClick={handleCreateClick}
                    onProfileClick={handleProfileClick}
                    onResetText={handleResetText} // Passez la fonction de réinitialisation ici
                />
            } />
        </div>
    );
};

export default ParentComponent;
