import React, { useState } from "react";
import Image from "next/image";
import icoPin from "../assets/svg/ico-pin.svg";
import icoList from "../assets/svg/ico-list.svg";
import icoProfile from "../assets/svg/ico-profile.svg";
import ballFoot from "../assets/images/ball-football.png";
import icoMen from "../assets/svg/ico-men.svg";
import profilePicture from "../assets/images/Alexis.png";

const matchs = [
  {
    ball: ballFoot,
    city: "Springfield",
    sport: "Football",
    players: "1/4",
    gender: icoMen,
  },
  {
    ball: ballFoot,
    city: "Tours",
    sport: "Handball",
    players: "2/3",
    gender: icoMen,
  },
  {
    ball: ballFoot,
    city: "Lille",
    sport: "Tennis",
    players: "0/1",
    gender: icoMen,
  },
];

const Phone: React.FC<{
  onListClick: () => void;
  onCreateClick: () => void;
  onProfileClick: () => void;
  onResetText: () => void; // Ajout de la fonction de réinitialisation
}> = ({ onListClick, onProfileClick, onResetText, onCreateClick }) => {
  const [activeScreen, setActiveScreen] = useState<
    "list" | "profile" | "create" | null
  >(null);

  const toggleScreen = (screen: "list" | "profile" | "create") => {
    if (activeScreen === screen) {
      // Si on clique à nouveau sur le bouton pour masquer l'écran, réinitialisez le texte
      onResetText();
      setActiveScreen(null);
    } else {
      // Affichez l'écran et mettez à jour le texte en conséquence
      if (screen === "list") {
        onListClick();
      } else if (screen === "profile") {
        onProfileClick();
      } else if (screen === "create") {
        onCreateClick();
      }
      setActiveScreen(screen);
    }
  };

  return (
    <div>
    <div className="text-center mb-4 font-bold">
      <p>
        interagit avec le smartphone<br />
        pour découvrir nos features clés
      </p>
    </div>
    <div className="phone-container">
      <div className="phone">
        <div
          className={`screen -list ${activeScreen === "list" ? "-shown" : ""}`}
        >
          {matchs.map((match, index) => (
            <div key={index} className="match">
              <Image src={match.ball} alt="ball-foot" className="ball" />
              <div className="infos">
                <div className="city">{match.city}</div>
                <div className="sport">{match.sport}</div>
              </div>
              <div className="players">{match.players}</div>
              <Image src={match.gender} alt="ico-gender" className="gender" />
            </div>
          ))}
        </div>

        <div
          className={`screen -create ${
            activeScreen === "create" ? "-shown" : ""
          }`}
        >
          <div className="form-container p-4 rounded-md">
            <form className="create-form space-y-2">
              <div className="flex space-x-2">
                <div className="form-group w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Entrez le nom"
                    className="mt-1 block w-full px-3 py-2 border border-green-500 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
                <div className="form-group w-1/2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Entrez une description"
                    className="mt-1 block h-10 w-full px-3 py-2 border border-green-500 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="places"
                  className="block text-sm font-medium text-gray-300"
                >
                  Nombre de places
                </label>
                <input
                  type="number"
                  id="places"
                  name="places"
                  placeholder="Nombre de places"
                  className="mt-1 block w-full px-3 py-2 border border-green-500 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              <div className="flex space-x-2">
                {" "}
                {/* Genre et Sport sur la même ligne */}
                <div className="form-group w-1/2">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Genre
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="mt-1 block w-full px-3 py-2 border border-green-500 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  >
                    <option value="mixed">Mixte</option>
                    <option value="men">Homme</option>
                    <option value="women">Femme</option>
                  </select>
                </div>
                <div className="form-group w-1/2">
                  <label
                    htmlFor="sport"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Sport
                  </label>
                  <input
                    type="text"
                    id="sport"
                    name="sport"
                    placeholder="Entrez le sport"
                    value={matchs[0].sport}
                    className="mt-1 block w-full px-3 py-2 border border-green-500 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-300"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="mt-1 block w-full px-3 py-2 border border-green-500 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-300"
                >
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Entrez l'adresse"
                  className="mt-1 block w-full px-3 py-2 border border-green-500 rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              <button type="submit" className="btn -phone">
                Créer
              </button>
            </form>
          </div>
        </div>

        <div
          className={`screen -profile ${
            activeScreen === "profile" ? "-shown" : ""
          }`}
        >
          <div className="title">Mon Profil</div>
          <div className="profile">
            <Image
              src={profilePicture}
              alt="profile-picture"
              className="picture"
            />
            <div className="infos">
              <div className="title-5">Alexis</div>
              <div className="gender body">
                <Image src={icoMen} alt="ico-gender" className="ico-gender" />
                <span>Homme</span>
              </div>
            </div>
          </div>
          <button className="btn -phone">Modifier mon profil</button>
          <button className="btn -phone">Se déconnecter</button>
        </div>

        <div className="navbar">
          <button className="pin-btn" onClick={() => toggleScreen("list")}>
            <Image src={icoPin} alt="ico-pin" className="ico-pin" />
          </button>
          <button
            className="ico-btn -list"
            onClick={() => toggleScreen("create")}
          >
            <Image src={icoList} alt="ico-list" className="ico-list" />
          </button>
          <button
            className="ico-btn -profile"
            onClick={() => toggleScreen("profile")}
          >
            <Image src={icoProfile} alt="ico-profile" className="ico-profile" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Phone;
