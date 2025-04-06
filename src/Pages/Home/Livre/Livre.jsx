import React from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import Container from '../../../Components/Container/Container';
import FadeInAnimation from '../../../Components/FadeInAnimation/FadeInAnimation';
import Reavel from '../../../Components/Reveal/Reavel';
import { FileText } from 'lucide-react';

const Livre = () => {
  return (
    <div className="dark:bg-majenta-800 pb-10 lg:pb-20" id="livre">
      <SectionHeader heading={"Livre"} />
      <Container>
        <div className="grid grid-cols-1 gap-10">
          <FadeInAnimation>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 max-w-5xl mx-auto">
              <div className="p-4">
                <img
                  className="rounded-xl shadow-2xl mx-auto w-72 lg:w-80"
                  loading="lazy"
                  src="/photos/legriot.jpg"
                  alt="Couverture du livre"
                />
              </div>

              <div className="text-center lg:text-left">
                <div className="max-w-prose mx-auto">
                  <Reavel>
                    <h2 className="font-bold text-2xl mb-4 dark:text-white text-slate-700">
                      Le Griot fustigeur
                    </h2>
                  </Reavel>
                  <Reavel>
                    <p className="dark:text-white text-slate-700 mb-6 whitespace-pre-line">
                      Jean Brinker est né en 1947. Surnommé « Jean-Louis » par son grand-père maternel
                      qui le recueille à l'adolescence, celui-ci l'encourage dès l'âge de 16 ans à pratiquer
                      la boxe anglaise pour canaliser son agressivité. Engagé dans l'armée française à 18 ans,
                      il apprend et enseigne le close combat militaire.
                    </p>
                    <p className="dark:text-white text-slate-700 mb-6 whitespace-pre-line">
                      En 1970, de retour à la vie civile, passionné par les arts martiaux et les sports de combat,
                      il pratique tour à tour le Karaté, l’Iaïdo, le Jodo, le Yoseikan-budo, le Judo et le Ju-Jitsu.
                      En 1985 il créé une école martiale française : le B.S-D (Bâton de combat – Self-Défense).
                    </p>
                    <p className="dark:text-white text-slate-700 mb-6 whitespace-pre-line">
                      Comment surmonter ses angoisses, ses doutes et ses peurs lorsqu’ils sont liés à un traumatisme
                      de l’enfance ? En quoi les arts martiaux peuvent-ils représenter une véritable et perpétuelle école de vie ?
                      Comment leur pratique passionnée permet-elle de reprendre prise sur soi tout en apprenant
                      à mieux comprendre et vivre avec les autres ?
                      Ce sont ces questions majeures que le récit autobiographique de Jean Brinker entreprend de se confronter,
                      nous livrant avec délicatesse mais aussi humour, une histoire emplie d’humanité.
                    </p>
                  </Reavel>
                  <Reavel>
                    <a
                      href="/docs/le-griot-fustigeur.pdf"
                      download
                      className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
                    >
                      <FileText size={20} />
                      Télécharger le PDF
                    </a>
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

export default Livre;
