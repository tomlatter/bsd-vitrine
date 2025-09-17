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
          <img title="Logo B.S-D Toulouse" alt="Logo B.S-D Toulouse" loading="lazy" className="w-36 md:w-36" src={logo} />
          <p className="-mt-3 ps-3.5 text-sm font-semibold text-slate-300 dark:text-white">
            
            
          </p>
          <div className="flex justify-center space-x-4 mt-5 py-4">
            <Link title="Facebook B.S-D" to="https://www.facebook.com/Baton.Self" target="_blank">
              <img className="w-8" src={facebook} title="Facebook Logo" alt="Facebook Logo" />
            </Link>
            <Link title="Instagram B.S-D" to="#">
              <img className="w-8" src={instagram} title="Instagram Logo" alt="Instagram Logo"/>
            </Link>
            <Link to="#">
              <img className="w-8" src={whatsapp} title="WhatsApp Logo" alt="WhatsApp Logo" />
            </Link>
            <Link  title="LinkedIn B.S-D" to="https://www.linkedin.com/in/jean-brinker-a9624284/" target="_blank">
              <img className="w-8" src={linkedin} title="LinkedIn Logo" alt="LinkedIn Logo" />
            </Link>
            <Link title="YouTube B.S-D" to="https://www.youtube.com/channel/UCnCFm5OJKFVqnmXFGvGWcnA" target="_blank">
              <img className="w-8" src={youtube} title="YouTube Logo" alt="YouTube Logo" />
            </Link>
          </div>
        </aside>
        <nav>
          <header className="font-bold text-xl mb-3 text-white">
            Contact
          </header>
          <div className="flex flex-col space-y-3 text-base text-white">
            <a
              href="https://maps.app.goo.gl/u1yFAogCkcS6g1Eg6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-1 hover:underline"
            >
              <FaMapMarkerAlt className="mt-1" />
              <span>
                Gymnase Anatole France<br />
                21 Bd de la Méditerranée<br />
                31400 Toulouse
              </span>
            </a>

            <a
              href="tel:0769237677"
              className="flex items-center gap-1 hover:underline"
            >
              <FaPhoneAlt />
              07 69 23 76 77
            </a>

            <a
              href="mailto:bsd.selfdefense@gmail.com"
              className="flex items-center gap-1 hover:underline"
            >
              <FaEnvelope />
              bsd.selfdefense@gmail.com
            </a>
          </div>
        </nav>

        <nav>
          <header className="font-bold text-xl mb-3 text-white">
            Liens rapides
          </header>
          <div className="flex flex-col space-y-3 text-base text-white">
            <Link to="/officiel" target="_blank" className="link link-hover hover:text-purple-500">
              Site Officiel B.S-D
            </Link>
            <Link to="/officiel/cours#cotisations" target="_blank" className="link link-hover hover:text-purple-500">
              Cotisations
            </Link>
            <Link to="/officiel/cours#bsd-au-feminin" target="_blank" className="link link-hover hover:text-purple-500">
              BSD au Féminin
            </Link>
            <Link  to="/officiel/origines#le-griot" target="_blank" className="link link-hover hover:text-purple-500">
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
