import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';


const Slug = ({ product, addToCart }) => {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <p className={styles.textH}>Lets Go Be Great...</p>
            <img className={styles.headImg} src="/head.png" alt="" />
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="flex justify-center items-center w-full lg:w-auto">
                            <img alt={product?.attributes?.Image?.data?.attributes.name} className=" rounded" src={`http://localhost:1337${product?.attributes?.Image?.data?.attributes.url}`} />
                            {/* <img alt={product.attributes.Title} className=" rounded" src={`http://localhost:1337${product?.attributes?.Image?.data?.attributes.url}`} /> */}
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">MyShop</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.attributes.Title}
                                <small className='text-sm font-medium'> &nbsp; ({product.attributes.Size})</small>
                            </h1>
                            <div className="flex mb-10">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed mb-10">{product.attributes.Description}</p>
                            <span className="leading-relaxed text-indigo-500 text-sm font-medium title-font">Category: {product.attributes.Category}</span>
                            <small className="leading-relaxed font-semibold ml-11">Available Quantity: {product.attributes.AvailableQuantity}</small>
                            <div className="flex mt-7 items-center pb-14 border-b-2 border-gray-100 mb-5">
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Flavor:</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 cursor-pointer">
                                            <option>Chocolate</option>
                                            <option>Vanilla</option>
                                            <option>Double Rich Chocolate</option>
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-4">
                                <span className="title-font font-medium text-2xl text-gray-900">Rs.{product.attributes.Price}</span>
                                <div className="flex mx-2">
                                    <button onClick={() => { addToCart(slug, 1, product.attributes.Price) }} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-2 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
                                    <button onClick={() => { router.push('/checkout') }} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-2 focus:outline-none hover:bg-indigo-600 rounded">Checkout</button>
                                </div>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export async function getServerSideProps(context) {
    console.log(context.query);
    // let headers = { Authorization: `Bearer ${process.env.ADMIN_TOKEN}` }
    // let a = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/products?filters[Slug]=" + context.query.Slug + "&populate=*", { headers: headers })
    let headers = { Authorization: "Bearer abdbfaae98773cc432b89fd67c780d77fc440662958ff60e18546bdbceb271f9faadd4871061c459482281fba4fe68c2660dbf7e75c109aaf2bcbe70af114683ff5a96a1d096d7a7fa34efe45e8ab6184838475718758f85de9ca942040999ede5b6fde263e0488e8509eb8bb9e95b289bba219c76701cf0b91d2759455b12b9" };
    let a = await fetch("http://localhost:1337/api/products?filters[slug]=" + context.query.slug + "&populate=*", { headers: headers });
    let product = await a.json();
    return {
        props: { product: product.data[0] },
    };
}

export default Slug;
