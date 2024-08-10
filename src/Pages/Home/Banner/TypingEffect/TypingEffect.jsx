import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';

const TypingEffect = () => {
    const [texts] = useTypewriter({
        words:['Combat de bâton long','Combat pieds-poings','Combat au sol','Self-Défense féminine','Bâton court','Canne de défense'],
        loop:{},
        typeSpeed:300,
        delaySpeed:80
    })
    return (
      <div className="text-white">
        <h2 className="md:text-6xl text-4xl font-bold">
          Bâton de Combat.<br/>Self-Défense.
        </h2><br/>
        <h4 className="md:text-4xl text-3xl my-5 font-semibold bg-purple-500 md:w-4/6 w-11/12 rounded mx-auto py-2.5 px-1">
          Cours d'essai gratuits
        </h4>
        <div className="md:text-3xl text-2xl font-semibold">
          <span>{texts}</span>
          <Cursor cursorStyle="." cursorColor="white" />
        </div>
        <p className="my-3 md:text-2xl"><br />
          Club d'arts martiaux à Toulouse depuis 1984.<br />
          Cours les lundis et jeudis de 20h à 22h.<br />
          Cotisation annuelle à seulement 150€.
        </p><br />
        <a 
          href="#disciplines" onClick={() => setActiveNav("#programmes")} className="btn bg-transparent border-2 border-purple-500 text-white px-5 transition-all hover:scale-95 hover:bg-purple-500 hover:border-purple-500">
          Découvrir
          
        </a>
      </div>
    );
};

export default TypingEffect;