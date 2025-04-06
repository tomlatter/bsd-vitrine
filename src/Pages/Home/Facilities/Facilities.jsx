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
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-3/4 md:top-3/4 lg:top-3/4">
                    <h4 className="text-xl font-semibold">Gymnase</h4>
                    <p>Avec parking gratuit et vestiaires</p>
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
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-3/4 lg:top-3/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Equipement pieds-poing</h4>
                    <p>Pattes d'ours, boucliers et gants de boxe</p>
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
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-3/4 md:top-3/4">
                  <h4 className="text-xl font-semibold">Bâtons et cannes</h4>
                    <p>Bâtons longs et cannes en bois rotin</p>
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
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-3/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Protections</h4>
                    <p>Casques, gants, plastrons et garde-jambes</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="Tatamis - Tapis de Sol - Toulouse"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/photos/tatamis.png"
                    title="Tatamis - Tapis de Sol - Toulouse"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-3/4 lg:top-3/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Tatamis</h4>
                    <p>Pour travailler des clés et projections au sol</p>
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
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-3/4 lg:top-3/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Sac de frappe</h4>
                    <p>Pour un entrainement intensif et varié</p>
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