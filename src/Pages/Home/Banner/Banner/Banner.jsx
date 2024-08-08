import React from 'react';
import TypingEffect from '../TypingEffect/TypingEffect';
import Carousel from '../Carousel/Carousel';
import backgroundImage from '../../../../assets/photos/fond.jpg';

const Banner = () => {
    return (
      <>
        <div id='acceuil'
          className="hero min-h-screen !px-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
            <div className='hero-overlay bg-opacity-60 dark:bg-opacity-80'></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='grid grid-cols-1 md:grid-cols-2 pt-16 gap-24'>
                    <div>
                        <TypingEffect/>
                    </div>
                    <div>
                        <Carousel/>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default Banner;