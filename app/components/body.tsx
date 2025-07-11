import React from 'react';

type Body = {
    name: string;
    description: string;
    image: string;
    features: { name: string; description: string }[];
};

type BodyProps = {
    body: Body[];
    isFading: boolean; // Utilisé pour contrôler l'opacité
    phoneComponent: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ body, isFading, phoneComponent }) => {
    const content = body[0];

    return (
        <div
            className="
                flex flex-col md:flex-row justify-center items-start
                w-full
                md:mt-2 mt-2
            "
        >
            {/* Bloc texte - décale sur la gauche et monte */}
            <div
                className={`
                    transition-opacity duration-300 ease-in-out
                    ${isFading ? 'opacity-0' : 'opacity-100'}
                    md:max-w-lg w-full
                    md:mr-20 mr-0         // <- Décale le texte vers la gauche sur desktop
                    md:ml-2 ml-0         // <- Petite marge à gauche (ajuste ici)
                    md:mt-[70px] mt-[-10px] // <- Monte le texte
                `}
                // marginTop inline si tu veux customiser plus
                // style={{ marginTop: '-48px' }} 
            >
                <h1 className="text-white md:text-5xl text-3xl font-extrabold mb-3">{content.name}</h1>
                <p className="baseline text-2xl mt-6 mb-6 text-gray-100">{content.description}</p>
                {content.features && content.features.length > 0 && (
                    <ul className="space-y-2 mb-8">
                        {content.features.map((feature, idx) => (
                            <li key={idx} className="text-base text-green-300">
                                <span className="font-semibold">{feature.name} :</span> {feature.description}
                            </li>
                        ))}
                    </ul>
                )}
                <div className="mt-4">
                    <button className="btn -fill">
                        Télécharger
                    </button>
                </div>
            </div>
            {/* Bloc téléphone */}
            <div className="md:ml-10 ml-0 md:mt-0 mt-8">
                {phoneComponent}
            </div>
        </div>
    );
};

export default Body;
