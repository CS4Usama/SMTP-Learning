import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Home() {
    return (
        <div className='container mx-auto px-4'>

            <div className="flex flex-wrap">
                <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-opacity-60 mt-8">
                    <h2 className="text-6xl sm:text-xl text-gray-900 font-medium title-font mb-2">Pure and High Quality Authentic Products</h2>
                    <h1 className={styles.headerTag}>One Stop Shop <br/> for Supplements</h1>
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
                    <img className={styles.suppImage} src="/supplements.png" alt="" />
                </div>
            </div>

            <div className="flex flex-wrap">
                        <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-center">
                            <img className={styles.icon} src="/icon.png" alt="" />
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Health</h2>
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche hexagon disrupt edison bulbche.</p>
                        </div>
                        <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-center">
                            <img className={styles.icon} src="/icon.png" alt="" />
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Fitness</h2>
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche hexagon disrupt edison bulbche.</p>
                        </div>
                        <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 text-center">
                            <img className={styles.icon} src="/icon.png" alt="" />
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Quality</h2>
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>

            {/* <img className='object-none object-top bg-yellow-300 w-[100vw] h-[40vh]' src="bg.jpg" alt="" /> */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Best Quality is Our Aim</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Fintess Should be Your First Goal</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <img className='mb-3' src="stars.png" width='70' alt="" />
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche hexagon disrupt edison bulbche.</p>
                            <img className='inline-block' src="person-1.png" width="50" alt="" />
                            <h4 className={styles.name}>John Copper</h4>
                            <small className={styles.city}>Log Angles CA</small>                            
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <img className='mb-3' src="stars.png" width='70' alt="" />
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche hexagon disrupt edison bulbche.</p>
                            <img className='inline-block' src="person-3.png" width="50" alt="" />
                            <h4 className={styles.name}>Emile A.</h4>
                            <small className={styles.city}>CA Log Angles</small> 
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <img className='mb-3' src="stars.png" width='70' alt="" />
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche hexagon disrupt edison bulbche.</p>
                            <img className='inline-block' src="person-2.png" width="50" alt="" />
                            <h4 className={styles.name}>Robert Fox</h4>
                            <small className={styles.city}>New York</small> 
                        </div>
                        <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <img className='mb-3' src="stars.png" width='70' alt="" />
                            <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche hexagon disrupt edison bulbche.</p>
                            <img className='inline-block' src="person-1.png" width="50" alt="" />
                            <h4 className={styles.name}>Alexander AB</h4>
                            <small className={styles.city}>Turkey</small> 
                        </div>
                    </div>
                    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-center">
                        <Link href="/products">
                            <a className="hover:text-gray-900 text-center font-medium">Start Shopping</a>
                        </Link>
                    </button>
                </div>
            </section>

        </div>
    )
}
