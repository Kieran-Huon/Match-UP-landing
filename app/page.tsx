'use client';

import Header from '@/app/components/header';
import './styles/main.css';

import Footer from './components/footer';
import ParentComponent from "./components/ParentComponent";
import Banner from './components/Sports';
import Matchup from './components/Title';
import Teams from './components/teams';

const tabs = [
  { name: 'Équipe', link: '/Teams' },
];

// Tableau des membres de l’équipe (utilise le nom ".png" pour chaque image, adapte le chemin si besoin)
const teamsData = [
  { name: 'Raphael', role: 'Chef de projet', image: '/images/Raphael.png' },
  { name: 'William', role: 'Chef de projet', image: '/images/William.png' },
  { name: 'Kevin', role: 'Développeur front', image: '/images/Kevin.png' },
  { name: 'Ayoub', role: 'Développeur front', image: '/images/Ayoub.png' },
  { name: 'Alexis', role: 'Développeur front', image: '/images/Alexis.png' },
  { name: 'Maxime', role: 'Développeur front', image: '/images/Maxime.png' },
  { name: 'Kieran', role: 'Développeur front', image: '/images/Kieran.png' },
  { name: 'Axel', role: 'Développeur backend', image: '/images/Axel.png' },
];

export default function Home() {
  return (
    <div className="blur-bkg">
      <div className="wrapper -large -padded">
        <Header tabs={tabs} />
        {/* <Matchup /> */}
        {/* <Banner /> */}
        <ParentComponent />

        {/* Section Équipe */}
        {/* <Teams teams={teamsData} /> */}

        <Footer />
      </div>
    </div>
  );
}
