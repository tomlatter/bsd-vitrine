import React from 'react';
import Container from '../../../Components/Container/Container';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import { motion } from "framer-motion";

const Facilities = () => {
    const fadeInAnimation = {
      initial: {
        opacity: 0,
        y: 100,
      },
      animate: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: custom + 0.07, 
          duration: 0.5,
        },
      }),
    };

    return (
      <div
        className="dark:bg-gray-700 bg-purple-300 pb-10 lg:pb-20"
        id="equipement"
      >
        <SectionHeader heading={"Notre équipement"}></SectionHeader>
        <Container>
          <div className="-m-1 lg:flex lg:flex-wrap  md:-m-2">
            <motion.div
              className="flex lg:w-1/2 flex-wrap"
              variants={fadeInAnimation}
              initial="initial"
              custom={0}
              whileInView="animate"
              viewport={{ once: true }}
            >
            <div className="lg:w-1/2 p-1 md:p-2 relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  alt="Gymnase Anatole France Toulouse"
                  title="Gymnase Anatole France Toulouse"
                  loading="lazy"
                  className="facilities_card_img"
                  src="/photos/gymnase.png"
                />

                {/* Overlay covering bottom quarter */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-center px-4">
                <h4 className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">Gymnase</h4>
                <p className="text-white text-l md:text-xl drop-shadow-md">Avec parking gratuit et vestiaires</p>
              </div>
              </div>
            </div>


              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="Bâton de Combat Toulouse"
                    title="Bâton de Combat Toulouse"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/photos/bouclier.jpg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-center px-4">
                    <h4 className="text-white text-2xl md:text-3xl font-bold">Equipement pieds-poing</h4>
                    <p className="text-white text-l md:text-xl drop-shadow-md">Pattes d'ours, boucliers et gants de boxe</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="Boucliers de frappe - Self Défense Toulouse"
                    title="Boucliers de frappe - Self Défense Toulouse"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/photos/baton4.jpg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-center px-4">
                  <h4 className="text-white text-2xl md:text-3xl font-bold">Bâtons et cannes</h4>
                    <p className="text-white text-l md:text-xl drop-shadow-md">Bâtons longs et cannes en bois rotin</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="lg:flex lg:w-1/2 lg:flex-wrap"
              variants={fadeInAnimation}
              initial="initial"
              custom={0.15}
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="w-full p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="Protections Combat de bâton long - Toulouse"
                    title="Protections Combat de bâton long - Toulouse"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/photos/baton-carousel/5.jpg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-center px-4">
                    <h4 className="text-white text-2xl md:text-3xl font-bold">Protections</h4>
                    <p className="text-white text-l md:text-xl drop-shadow-md">Casques, gants, plastrons et garde-jambes</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="Tatamis - Tapis de Sol - Toulouse"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/photos/tatamis.jpg"
                    title="Tatamis - Tapis de Sol - Toulouse"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-center px-4">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">Tatamis</h3>
                    <p className="text-white text-l md:text-xl drop-shadow-md">Pour travailler des clés et projections au sol</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    title="Sac de frappe - Toulouse"
                    alt="Sac de frappe"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/photos/sacdefrappe.jpg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-black/70 flex flex-col justify-center px-4">
                    <h4 className="text-white text-2xl md:text-3xl font-bold">Sac de frappe</h4>
                    <p className="text-white text-l md:text-xl drop-shadow-md">Pour un entrainement intensif et varié</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    );
};

export default Facilities;