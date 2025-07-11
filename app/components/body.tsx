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
    return (
        <>
            {body.map((props, index) => (
                <div
                    id="#body"
                    key={index}
                    className="body-container grid lg:grid-cols-2 md:grid-cols-2 gap-6 max-md:justify-center items-center lg:my-24 my-12"
                >
                    <div className="flex flex-col">
                        <div className={`transition-opacity duration-300 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                            <h1 className="text-white lg:text-6xl text-4xl font-extrabold">{props.name}</h1>
                            <p className="baseline text-2xl mt-6 mb-12">{props.description}</p>
                        </div>
                        <div className="mt-6">
                            <button className="btn -fill">
                                Télécharger
                            </button>
                        </div>
                    </div>
                    <div>
                        {phoneComponent}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Body;
