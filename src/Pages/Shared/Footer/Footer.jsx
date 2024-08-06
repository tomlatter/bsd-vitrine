import React from "react";
import logo from "../../../assets/logo/logo.png";
import facebook from "../../../assets/social/facebook.png";
import instagram from "../../../assets/social/instagram.png";
import whatsapp from "../../../assets/social/whatsapp.png";
import linkedin from "../../../assets/social/linkedin.png";
import youtube from "../../../assets/social/youtube.png";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaHeadset,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer  py-14 px-10 bg-majenta-800 dark:bg-majenta-900 text-base-content">
        <aside>
          <img loading="lazy" className="w-36 md:w-36" src={logo} />
          <p className="-mt-3 ps-3.5 text-sm font-semibold text-slate-300 dark:text-white">
            
            
          </p>
          <div className="flex justify-center space-x-4 mt-5 py-4">
            <Link to="https://www.facebook.com/Baton.Self" target="_blank">
              <img className="w-8" src={facebook} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={instagram} alt="" />
            </Link>
            <Link to="#">
              <img className="w-8" src={whatsapp} alt="" />
            </Link>
            <Link to="https://www.linkedin.com/in/jean-brinker-a9624284/" target="_blank">
              <img className="w-8" src={linkedin} alt="" />
            </Link>
            <Link to="https://www.youtube.com/channel/UCnCFm5OJKFVqnmXFGvGWcnA" target="_blank">
              <img className="w-8" src={youtube} alt="" />
            </Link>
          </div>
        </aside>
        <nav>
          <header className="font-bold text-xl mb-3 text-white">
            Contact
          </header>
          <div className="flex flex-col space-y-3 text-base text-white">
            <p className="flex items-center gap-1">
              <FaMapMarkerAlt /> 
              Gymnase Anatole France<br/>
              21 Bd de la Méditerranée<br/>
              31400 Toulouse
            </p>
            <p className="flex items-center gap-1">
              <FaPhoneAlt />
              07 69 23 76 77
            </p>
            <p className="flex items-center gap-1">
              <FaEnvelope />
              bsd.baton@gmail.com
            </p>
          </div>
        </nav>
        <nav>
          <header className="font-bold text-xl mb-3 text-white">
            Liens rapides
          </header>
          <div className="flex flex-col space-y-3 text-base text-white">
            <Link to="https://www.baton-self.com/fr/" target="_blank" className="link link-hover hover:text-purple-500">
              Site B.S-D
            </Link>
            <Link to="https://www.baton-self.com/fr/cours/cotisation" target="_blank" className="link link-hover hover:text-purple-500">
              Cotisations
            </Link>
            <Link to="https://www.baton-self.com/fr/pratique-bsd/bsd-au-feminin" target="_blank" className="link link-hover hover:text-purple-500">
              BSD au Féminin
            </Link>
            <Link  to="https://www.baton-self.com/fr/sagesse-du-bsd/le-griot-fustigeur" target="_blank" className="link link-hover hover:text-purple-500">
              Le Griot Fustigeur
            </Link>
          </div>
        </nav>

      </footer>
      <div className="footer-center p-6 bg-majenta-800 dark:bg-gray-900 text-slate-300 border-t border-slate-500 text-sm">
        <p>B.S-D BÂTON DE COMBAT. SELF-DÉFENSE Copyright © {year} | N° de déclaration au Ministère de la Jeunesse, des Sports et de la Vie Associative : 03106ET0029</p>
      </div>
    </div>
  );
};

export default Footer;
