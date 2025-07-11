import ProfileCard from "@/app/components/profile-card";

type Teams = {
    name: string;
    role: string;
    image: string;
};

type TeamsProps = {
    teams: Teams[];
};

const Teams: React.FC<TeamsProps> = ({ ...props }) => {
    return (
        <div id="teams" className="font-sans mb-24">
            <div className="lg:max-w-5xl max-w-3xl mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-white text-4xl font-extrabold">Notre équipe</h2>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 max-md:justify-center mt-12">
                    {props.teams.map(({ ...props }, index) => (
                        <ProfileCard 
                            key={index}
                            name={props.name} 
                            role={props.role} 
                            imageUrl={props.image}
                            socialLinks={{ linkedin: '', twitter: '', facebook: '' }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teams;
