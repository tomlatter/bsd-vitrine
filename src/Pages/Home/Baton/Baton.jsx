import React from 'react';
import SectionHeader from '../../../Components/SectionHeader/SectionHeader';
import Container from '../../../Components/Container/Container';
import FadeInAnimation from '../../../Components/FadeInAnimation/FadeInAnimation';
import Reavel from '../../../Components/Reveal/Reavel';
import Slider from "react-slick";

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = Array.from({ length: 12 }, (_, i) => `/photos/baton-carousel/${i + 1}.jpg`);


const Baton = () => {
  return (
    <div className="dark:bg-gray-700 bg-purple-300 pb-10 lg:pb-20" id="baton">
      <SectionHeader heading={"Le Bâton de Combat"} />
      <Container>
        <div className="grid grid-cols-1 gap-10">
            <FadeInAnimation>
            {/* Block 1: Video left, text right */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 max-w-5xl mx-auto">
                <div className="w-full lg:w-1/2">
                <div className="w-full shadow-lg rounded-xl overflow-hidden">
                    <video
                    className="w-full h-auto"
                    controls
                    preload="metadata"
                    poster="/photos/thumbnail.png"
                    >
                    <source src="/docs/Codifiés Droitier.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture vidéo.
                    </video>
                </div>
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="max-w-prose mx-auto">
                    <Reavel>
                    <h2 className="font-bold text-2xl mb-4 dark:text-white text-slate-700">Origines</h2>
                    <p className="dark:text-white text-slate-700 mb-6 whitespace-pre-line">
                        Le combat au bâton long existe partout dans le monde depuis que l’Homme existe.
                        En France, dans les périodes violentes comme au moyen-âge, c’était un fidèle compagnon. Il aidait à marcher, descendre à flanc de montagne, gauler des fruits, passer à gué des rivières et surtout se défendre.
                        Il était enseigné dans l’armée napoléonienne, puis quelques Maîtres bâtonnistes ont œuvrés en France au 19, 20 et 21ème siècle.
                    </p>
                    </Reavel>

                </div>
                </div>
            </div>
            </FadeInAnimation>


            <FadeInAnimation>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 max-w-5xl mx-auto">
                    <p className="dark:text-white text-slate-700 mb- whitespace-pre-line">
                        Le Bâton de Combat – Self-Défense (B.S-D) est une discipline moderne née en 1980 à Toulouse, enrichie en 1988 par l’intégration de techniques portugaises. 
                        Spécialisé en combat au Bâton long (entre 1,50m et 1,60m), le B.S-D se rapproche des techniques d’épées à deux mains des chevaliers de notre époque médiévale, 
                        doublé dans l’esprit, d’un subtil mélange de « Naginata » utilisé par les japonaises.
                    </p>

                </div>
            </FadeInAnimation>

            <FadeInAnimation>
                <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 max-w-5xl mx-auto">
            
                        <div className="italic text-lg text-purple-900 dark:text-purple-200 my-2 px-2">
                            “À l’ombre des guerriers, de la noblesse d’épée, s’épanouit aussi la joute roturière. Expert bâtonnistes, Maîtres du marteau de forge, du fouet et de la fourche, s'expriment dans des débats campagnards mais néanmoins violents dans lesquels se règlent les conflits paysans. Cet art de la route isolée et de la ruelle sombre a contribué de façon décisive à l’élaboration des techniques à mains nues de la self-défense d’hier et d’aujourd’hui.”
                            <br />
                            <span className="block mt-2 text-sm not-italic">— Charlot & Denaud, Que sais-je, 1999</span>
                        </div>
                </div>
            </FadeInAnimation>

            <FadeInAnimation>
            {/* Block 2: Text left, image right */}
            <div className="flex flex-col lg:flex-row-reverse justify-center items-start gap-10 px-6 max-w-5xl mx-auto">
                <div className="w-full lg:w-1/2">
                <img
                    src="/photos/baton-carousel/5.jpg"
                    alt="Bâton art"
                    className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="max-w-prose mx-auto">
                    <h2 className="font-bold text-2xl mb-4 dark:text-white text-slate-700">Le Bâton comme Art</h2>
                    <p className="dark:text-white text-slate-700 mb-3 whitespace-pre-line">
                        Le combat au bâton est une pratique universelle, présente dans toutes les cultures. Des colporteurs aux paysans, des samouraïs aux forgerons, tous ont contribué à la richesse de cet art populaire et pragmatique. Dans le B.S-D, le bâton n’est pas seulement une arme : il devient une extension de l’esprit. 
                        Cette pratique ne se limite pas à un exercice physique ou esthétique — elle est conçue comme un art de vivre, un moyen d’expression et d’évolution personnelle.
                         Non compétitif, le B.S-D a été présenté dans plusieurs galas d’arts martiaux aux côtés de champions olympiques et mondiaux.
                    </p>

                    <div className="italic text-lg text-purple-900 dark:text-purple-200 my-8 px-2">
                        “Encore au début du siècle, des itinérants experts dans le maniement du bâton enseignaient leur art aux paysans contre gîte et couvert.”
                    </div>
                </div>
                </div>
            </div>
            </FadeInAnimation>

            <FadeInAnimation>
            {/* Block 3: Image left, text right */}
            <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 max-w-5xl mx-auto">
                <div className="w-full lg:w-1/2">
                <img
                    src="/photos/baton-carousel/1.jpg"
                    alt="Structure d'entraînement"
                    className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="max-w-prose mx-auto">
                    <Reavel>
                    <h2 className="font-bold text-2xl mb-4 dark:text-white text-slate-700">Structure de la discipline</h2>
                    <p className="dark:text-white text-slate-700 mb-6 whitespace-pre-line">
                        Le B.S-D repose sur une approche libre et sécurisée du combat au bâton. Il propose une pédagogie adaptée à tous les âges et niveaux, avec une alchimie originale : 50% d’esprit (assiduité, passion, humanité), 30% de techniques, et 20% de qualités physiques.
                        <br/><br/>
                        Les pratiquants étudient les techniques de base avec un bâton de 1m60, des enchaînements techniques et codifiés, en duo ou en solo, et quelques "bottes secrètes". Les assauts, avec ou sans arbitrage, sont au cœur de la pratique.
                    </p>
                    </Reavel>
                </div>
                </div>
            </div>
            </FadeInAnimation>

            <FadeInAnimation>
            {/* Block 4: Text left, image right */}
            <div className="flex flex-col lg:flex-row-reverse justify-center items-start gap-10 px-6 max-w-5xl mx-auto">
                <div className="w-full lg:w-1/2">
                <img
                    src="/photos/baton-carousel/10.jpg"
                    alt="Transmission"
                    className="rounded-xl shadow-xl w-full h-auto object-cover"
                />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="max-w-prose mx-auto">
                    <h2 className="font-bold text-2xl mb-4 dark:text-white text-slate-700">Philosophie et Transmission</h2>
                    <p className="dark:text-white text-slate-700 mb-1 whitespace-pre-line">
                        Le B.S-D privilégie l’évolution humaine avant la progression technique. Il n’y a pas de système de grades classiques, mais une évaluation continue qui mène à des titres. Chaque formateur reste guidé par l’éthique et les valeurs fondamentales du B.S-D, inspirées de Jigoro Kano :
                    </p>

                    <div className="italic text-lg text-purple-900 dark:text-purple-200 my-8 px-2">
                        “C'est par l'entraide et les concessions mutuelles qu'un organisme groupant
                        des individus, en nombre grand ou petit, peut trouver sa pleine harmonie et
                        réaliser des progrès sérieux.”
                        <br />
                        <span className="block mt-2 text-sm not-italic">— Jigoro Kano, fondateur du Judo</span>
                    </div>

                 
                </div>
                </div>
            </div>
            </FadeInAnimation>

            <FadeInAnimation>
                <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 max-w-5xl mx-auto">
            
                        <div className="italic text-lg text-purple-900 dark:text-purple-200 my-4 px-2">
                            “Éduquer le corps aux techniques martiales, c’est éveiller l’esprit à la non-violence sous toutes ses formes.”
                        <br />
                        <span className="block mt-2 text-sm not-italic">— La devise philosophique du BSD, JL Brinker, fondateur du BSD</span>
                        </div>
                </div>
            </FadeInAnimation>


            <FadeInAnimation>
                <div className="flex justify-center">
                    <div className="w-full max-w-4xl px-4">
                        <div className="rounded-xl shadow-xl overflow-hidden">
                        <Slider {...settings}>
                            {slides.map((src, index) => (
                            <div key={index}>
                                <img
                                src={src}
                                alt={`Bâton de combat ${index + 1}`}
                                className="w-full h-auto aspect-video object-cover"
                                />
                            </div>
                            ))}
                        </Slider>
                        </div>
                    </div>
                </div>
            </FadeInAnimation>
        </div>
      </Container>
    </div>
  );
};

export default Baton;
