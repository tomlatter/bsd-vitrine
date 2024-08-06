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
        id="facilities"
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
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/assets/photos/gymnase.png"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 md:top-3/4 lg:top-2/4">
                    <h4 className="text-xl font-semibold">Gymnase</h4>
                    <p>Avec parking gratuit et vestiaires</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/assets/photos/baton4.jpg"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 lg:top-2/4 md:top-3/4">
                  <h4 className="text-xl font-semibold">Bâtons de combat</h4>
                    <p>Bâtons longs en bois rotin</p>
                  </div>
                </div>
              </div>
              <div className="w-full p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/assets/photos/bouclier.jpg"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Equipement pieds-poing</h4>
                    <p>Sacs de frappe, pattes d'ours, boucliers de frappe et gants de boxe</p>
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
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/assets/photos/protections.jpg"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Protections</h4>
                    <p>Casques, gants, plastrons et garde-jambes</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="/assets/photos/tapis.jpg"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 lg:top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Tapis de sol</h4>
                    <p>Pour travailler des clés et projections</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-1 md:p-2 relative group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    alt="gallery"
                    loading="lazy"
                    className="facilities_card_img"
                    src="https://d2t6o06vr3cm40.cloudfront.net/2023/03/26/14/38/56/a1e14176-541b-4e92-bb37-44ede9180dc3/DSC04355.jpg"
                  />
                  <div className="facilities_card_overlay"></div>
                  <div className="absolute inset-0 text-white p-3 top-2/4 lg:top-2/4 md:top-3/4">
                    <h4 className="text-xl font-semibold">Armes d'entraînement</h4>
                    <p>Couteaux et pistolets factices</p>
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