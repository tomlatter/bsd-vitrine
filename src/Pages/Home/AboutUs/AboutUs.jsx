import React from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import Container from '../../../Components/Container/Container';
import logo from '../../../assets/logo/logo.png';
import FadeInAnimation from '../../../Components/FadeInAnimation/FadeInAnimation';
import Reavel from '../../../Components/Reveal/Reavel';
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
      <div
        className="dark:bg-gray-700 bg-purple-300 pb-10 lg:pb-20"
        id="cours"
      >
        <SectionHeader heading={"Nos cours"}></SectionHeader>
        <Container>
          <div className="grid grid-cols-1 gap-10">
            <FadeInAnimation>
              <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-12">
                <div className="">
                  <img
                    className="md:max-w-md max-w-sm rounded-xl"
                    loading="lazy"
                    src="/photos/groupe.jpg"
                    alt="Groupe self défense Toulouse"
                  />
                </div>
                <div>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-white">
                    <br/>
                      <p className="font-bold text-xl mb-2">Cours d'essai gratuit</p>
                      Le mieux pour se faire une idée précise, est de venir essayer.<br/>
                      Pour s&#39;inscrire, il est préférable d&#39;appeler le 07 69 23 76 77.<br/>
                      Laissez un message vocal en indiquant
                      votre nom et votre âge.<br/>
                      Et précisez si c&#39;est pour la Self-Défense ou le Bâton de combat.
                      <br/><br/>
                      Un T-shirt, un pantalon de
                      survêtement et une paire de tennis suffisent.<br/>
                      Vous n&#39;êtes pas plongé(e) dans le bain
                      directement. <br/>Un.e enseignant.e vous apprendra quelques techniques.<br/>
                      Et on répondra également à toutes vos questions.
                      <br/>
                      <br/>
                      Pour continuer par la suite, un
                      certificat médical sera nécesaire.<br/>
                      Une cotisation vous sera également demandée.<br/>
                      <Link to="/officiel/cours#cotisations" target="_blank" className="text-purple-500 font-semibold mt-2 underline">
                        <span className="text-purple-500">Plus d'informations sur les cotisations ici</span>
                      </Link>
                    </p>
                  <br />
                </div>
              </div>
            </FadeInAnimation>
            <FadeInAnimation>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
                <div>
                  <img
                    className="md:max-w-md max-w-sm rounded-xl mx-auto"
                    loading="lazy"
                    src="/photos/coursseniors.jpg"
                    alt="Course de Self Defense"
                  />
                  <br/>
                  <br/>
                  <img
                    className="md:max-w-md max-w-sm rounded-xl mx-auto"
                    loading="lazy"
                    src="/photos/coursbaton2.jpg"
                    alt="Cours de bâton de combat"
                  />
                </div>
                <div>
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-white">
                    <Reavel>
                      <p className="font-bold text-xl mb-2">Lundis 20h - 22h</p>
                    <ul className="list-disc ps-6">
                        {" "}
                        <li>
                        <b>Cours de Self-Défense</b>  <br/>
                          Echauffement et renforcement musculaire.<br/>
                          Pieds-poings, clés, étranglements, amenées au sol,  <br/>
                          Projections sur tatamis, contrôle au sol, combat debout. <br/>
                          Combat contre plusieurs adversaires.<br/>
                          Défense contre couteau et armes contondantes.  <br/>
                          Assauts libres, combats avec protections.
                        </li>
                    </ul>
                    </Reavel>
                    </p>
                  <br/>
                  <br/>
                    <Reavel>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-white">
                      <p className="font-bold text-xl mb-2">Jeudis 20h - 22h</p>
                    
                    <ul className="list-disc ps-6">
                        {" "}
                        <li>
                        <b>Cours de Bâton de combat</b> <br/>
                          Echauffement et renforcement musculaire.<br/>
                          Techniques de frappe, parades et contres. <br/>
                          Piques, blocages, balayages, chassés, dégagements, percussions.  <br/>
                          Désarmer, feintes. Bottes. Enchainements techniques.<br/> 
                          Enchainements projections, enchainements codifiés. <br/>
                          Assauts au bâton long en rotin (1,60 m).<br/>
                          Assauts à la canne en rôtin (1m). <br/>
                          Combats avec canne p.v.c mousse et protections. <br/>
                          Combats avec bâton long et protections. Arbitrage.
                        </li>
                    </ul>
                  </p>
                    </Reavel>
                  <br/>
                  <br/>
                  <div>
                      <Reavel>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-white">
                        <p className="font-bold text-xl mb-2">Samedis 14h - 18h</p>
                      <ul className="list-disc ps-6">
                          {" "}
                          <li>
                          Cours suivant la disponibilité des enseignants et le nombre de participants. <br/>
                          Certains samedis reservés à la formation des Enseignants et Enseignantes.
                          </li>
                      </ul>
                    </p>
                      </Reavel>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
            <FadeInAnimation>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-8">
                <div>
                  <div className="dark:text-white text-slate-700">
                      <p 
                          className="max-w-[740px] mx-auto text-base text-xl md:text-2xl leading-relaxed text-slate-700 dark:text-slate-300 text-center"
                        >
                          Le B.S-D Bâton de Combat. Self-Défense est un art martial français créé à Toulouse en 1984 par Maître Jean Louis Brinker.
                          <br/>
                        <Link to="/officiel" target="_blank" className="text-purple-500 font-semibold mt-2 underline">
                          <span  className="inline-block mt-4 px-5 py-3 bg-gradient-to-r from-majenta-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
                            Visitez le site officiel du B.S-D</span>
                        </Link>
                      </p>
                    
                  </div>
                </div>
              </div>
            </FadeInAnimation>
          </div>
        </Container>
      </div>
    );
};

export default AboutUs;