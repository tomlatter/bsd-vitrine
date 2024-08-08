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
              <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10">
                <div className="">
                  <img
                    className="md:max-w-md max-w-sm rounded-xl"
                    loading="lazy"
                    src="/photos/gymnase.png"
                    alt=""
                  />
                </div>
                <div>
                  <Reavel>
                    <p className="dark:text-white text-slate-700">
                    <br/>
                    <Reavel>
                      <p className="font-bold text-xl mb-2">Cours d'essai gratuit</p>
                    </Reavel>
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
                      <Link to="https://www.baton-self.com/fr/cours/cotisation" target="_blank" className="text-purple-500 font-semibold mt-2 underline">
                        <span className="text-purple-500">Plus d'informations sur les cotisations ici</span>
                      </Link>
                    </p>
                  </Reavel>
                  <br />
                </div>
              </div>
            </FadeInAnimation>
            <FadeInAnimation>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                <div>
                  <img
                    className="md:max-w-md max-w-sm rounded-xl mx-auto"
                    loading="lazy"
                    src="/photos/coursseniors.jpg"
                    alt=""
                  />
                  <br/>
                  <br/>
                  <img
                    className="md:max-w-md max-w-sm rounded-xl mx-auto"
                    loading="lazy"
                    src="/photos/coursbaton2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="dark:text-white text-slate-700">
                    <Reavel>
                      <p className="font-bold text-xl mb-2">Lundis 20h - 22h</p>
                    </Reavel>
                    <ul className="list-disc ps-6">
                      <Reavel>
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
                      </Reavel>
                    </ul>
                    </p>
                  <br/>
                  <p className="dark:text-white text-slate-700">
                    <Reavel>
                      <p className="font-bold text-xl mb-2">Jeudis 20h - 22h</p>
                    </Reavel>
                    
                    <ul className="list-disc ps-6">
                      <Reavel>
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
                      </Reavel>
                    </ul>
                  </p>
                  <br/>
                  <div>
                    <p className="dark:text-white text-slate-700">
                      <Reavel>
                        <p className="font-bold text-xl mb-2">Samedis 14h - 16h</p>
                      </Reavel>
                      <ul className="list-disc ps-6">
                        <Reavel>
                          {" "}
                          <li>
                          <b>Cours de Self-défense pour séniors</b>. <br/>
                          Apprendre à se défendre à mains nues.<br/>
                            Accessible aux non-licenciés. <br/>
                            Cours que un samedi sur deux.
                          </li>
                        </Reavel>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </FadeInAnimation>
            <FadeInAnimation>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                <div>
                  <div className="dark:text-white text-slate-700">
                    <Reavel>
                      <p className="font-bold text-xl mb-2" style={{textAlign: "center"}}>Le B.S-D Bâton de Combat. Self-Défense est un art martial français.
                      <br/> Créé à Toulouse en 1984 par Maître Jean Louis Brinker.
                        <br/>
                        <Link to="https://www.baton-self.com" target="_blank" className="text-purple-500 font-semibold mt-2 underline">
                          <span className="text-purple-500">Plus d'informations sur le site historique du B.S-D</span>
                        </Link>
                      </p>
                    </Reavel>
                    
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