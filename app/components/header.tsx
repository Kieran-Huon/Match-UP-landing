'use client';

import React, { useEffect } from 'react';
import Image from "next/image";
import logo from '../assets/images/MU-logo.png';

type Tab = {
    name: string;
    link: string;
};

type HeaderProps = {
    tabs: Tab[];
};

const Header: React.FC<HeaderProps> = ({...props}) => {
    useEffect(() => {
        const toggleOpen = document.getElementById('toggleOpen') as HTMLElement;
        const toggleClose = document.getElementById('toggleClose') as HTMLElement;
        const collapseMenu = document.getElementById('collapseMenu') as HTMLElement;

        function handleClick() {
            if (collapseMenu.style.display === 'block') {
                collapseMenu.style.display = 'none';
            } else {
                collapseMenu.style.display = 'block';
            }
        }

        toggleOpen?.addEventListener('click', handleClick);
        toggleClose?.addEventListener('click', handleClick);

        // Nettoyage des écouteurs d'événements lors du démontage du composant
        return () => {
            toggleOpen?.removeEventListener('click', handleClick);
            toggleClose?.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <header
            className='header flex pt-[60px] font-[sans-serif] tracking-wide relative z-50'>
            <div className='flex flex-wrap items-center gap-5 w-full'>
                <Image src={logo} alt="logo" className="w-[100px] h-auto"/>
                <div id="collapseMenu"
                     className='max-lg:hidden lg:!flex lg:ml-auto max-lg:before:fixed max-lg:before:bg-white max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
                    <button id="toggleClose"
                            className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-black p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-white"
                             viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>

                    <ul className='lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-black max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                        <li className='mb-6 hidden max-lg:block'>
                            <a href="">
                                <Image src={logo} alt="logo" className='w-10'/>
                            </a>
                        </li>

                        {props.tabs.map(({...props}, index) => (
                            <li key={index} className='max-lg:border-b max-lg:py-3 px-3'>
                                <a href={props.link} className='btn'>{props.name}</a>
                            </li>
                        ))}

                    </ul>
                </div>

                <div className='flex items-center max-lg:ml-auto space-x-6'>
                    <button className='btn -fill'>
                        Télécharger
                    </button>

                    <button id="toggleOpen" className='lg:hidden'>
                        <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
