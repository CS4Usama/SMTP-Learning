import React from 'react';
import styles from '../styles/Home.module.css';


const About = () => {
    return (
        <div className='container mx-auto px-4 mb-12'>
            <div className="flex flex-wrap">
                <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-opacity-60 mt-8">
                    <h1 className={styles.headerTag}>About Us</h1>
                    <h2 className="text-6xl sm:text-2xl text-gray-900 font-medium title-font my-3">Fitness is Life</h2>
                    <p className="leading-relaxed text-base mt-8 mb-8">
                        Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche. Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche. Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a className="text-indigo-500 inline-flex items-center cursor-pointer">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div className=" xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6  border-opacity-60">
                    {/* <img className={styles.headerImage} src="/bg-header.png" alt="" /> */}
                    <img className={styles.suppImage2} src="/Capture.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About