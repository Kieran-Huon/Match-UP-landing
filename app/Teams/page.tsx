// app/team/page.tsx
'use client';

import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Teams from '@/app/components/teams';
import '@/app/styles/main.css';



// Ici tu mets exactement le tabs que tu veux voir dans ton header
const tabs = [
  { name: 'Équipe', link: '/Teams' },
];

const teamsData = [
  { name: 'Raphaël', role: 'Chef de projet', image: '/images/Raphael.png' },
  { name: 'William', role: 'Chef de projet', image: '/images/William.png' },
  { name: 'Kevin', role: 'Développeur front', image: '/images/Kevin.png' },
  { name: 'Ayoub', role: 'Développeur front', image: '/images/Ayoub.png' },
  { name: 'Alexis', role: 'Développeur front', image: '/images/Alexis.png' },
  { name: 'Maxime', role: 'Développeur front', image: '/images/Maxime.png' },
  { name: 'Kieran', role: 'Développeur front', image: '/images/Kieran.png' },
  { name: 'Axel', role: 'Développeur backend', image: '/images/Axel.png' },
];

export default function TeamPage() {
  return (
    <div className="blur-bkg min-h-screen">
      <div className="wrapper -large -padded flex flex-col min-h-screen">
        {/* On importe ton header EXACT avec tabs */}
        <Header tabs={tabs} />
        <main className="flex-1 flex flex-col items-center justify-center py-12">
          <Teams teams={teamsData} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
