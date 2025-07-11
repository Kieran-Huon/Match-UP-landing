'use client'

import Header from '@/app/components/header';
import './styles/main.css';

import Footer from './components/footer';
import ParentComponent from "./components/ParentComponent";
import Banner from './components/Sports';
import Matchup from './components/Title';

const tabs = [
    {name: 'Équipe', link: '#teams'},
];

export default function Home() {
    return (
        <div className="blur-bkg">
            <div className="wrapper -large -padded">
                <Header tabs={tabs}/>
                <Matchup/>
                <Banner/>
                <ParentComponent/>
                <Footer/>
            </div>
        </div>
    );
}
