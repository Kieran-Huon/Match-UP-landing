import React from "react";

type FeatureProps = {
    title: string,
    text: string,
    justifyLeft?: boolean,
};

const Feature: React.FC<FeatureProps> = ({ title, text, justifyLeft = false }) => {
    return (
        <div className={`feature ${justifyLeft ? '-justify-left' : ''}`}>
            <div className="col-one"></div>
            <div className="col-two">
                <div className="text-white lg:text-5xl text-3xl font-extrabold">{title}</div>
                <p className='body'>{text}</p>
            </div>
        </div>
    );
};

export default Feature;