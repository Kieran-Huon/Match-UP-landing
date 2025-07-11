import React from "react";
import Image from "next/image";

interface ProfileCardProps {
    name: string;
    role: string;
    imageUrl: string;
    socialLinks: {
        facebook: string;
        twitter: string;
        linkedin: string;
    };
}

const ProfileCard: React.FC<ProfileCardProps> = ({...props}) => {
    return (
        <div className="border rounded-lg overflow-hidden">
            <Image
                src={props.imageUrl}
                alt="profil picture"
                width={200}
                height={200}
                className="w-full h-56 object-cover"
            />

            <div className="bg-black p-4">
                <h4 className="text-white text-base font-bold">{props.name}</h4>
                <p className="text-white text-xs mt-1">{props.role}</p>

                <div className="space-x-4 mt-4">
                    <a href={props.socialLinks.facebook}>
                        <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700">
                            {/* ... */}
                        </button>
                    </a>
                    <a href={props.socialLinks.twitter}>
                        <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4]">
                            {/* ... */}
                        </button>
                    </a>
                    <a href={props.socialLinks.linkedin}>
                        <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5]">
                            {/* ... */}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
