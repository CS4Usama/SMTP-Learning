import Link from 'next/link';
import React from 'react';


const Products = (props) => {
    return (
        <div className='container mx-auto px-4'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 md:py-24 mx-auto">
                    <div className="flex flex-wrap w-full md:mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                                Product List – MyShop
                            </h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {props.products.data.map((item) => {
                            return (
                                <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <img style={{aspectRatio: '3/2', objectFit: 'contain', height: '75%'}} className="h-96 rounded m-auto mb-8" src={item?.attributes?.Image?.data && `http://localhost:1337${item?.attributes?.Image?.data?.attributes?.url}`} alt={item?.attributes?.Image?.data?.attributes?.name} />
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                            {item.attributes.Category}
                                        </h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font">
                                            {item.attributes.Title}
                                        </h2>
                                        <small className='text-violet-400'>{item.attributes.Flavor}</small>
                                        <small className='text-gray-400'> ({item.attributes.Size})</small>
                                        <p className="leading-relaxed text-base  mt-4">
                                            {item.attributes.Description}
                                        </p>
                                        <small className='font-semibold'>Rs.{item.attributes.Price}</small>
                                        <small className='text-gray-500'> &nbsp; &nbsp; Available Quantity: {item.attributes.AvailableQuantity}</small> <br/>
                                        <Link href={`/product/${item.attributes.slug}`}>
                                            <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                                                Buy Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}


export async function getServerSideProps(context) {
    // let headers = { Authorization: `Bearer ${process.env.ADMIN_TOKEN}` };
    // let a = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/products?populate=*", { headers: headers });
    let headers = { Authorization: "Bearer abdbfaae98773cc432b89fd67c780d77fc440662958ff60e18546bdbceb271f9faadd4871061c459482281fba4fe68c2660dbf7e75c109aaf2bcbe70af114683ff5a96a1d096d7a7fa34efe45e8ab6184838475718758f85de9ca942040999ede5b6fde263e0488e8509eb8bb9e95b289bba219c76701cf0b91d2759455b12b9" };
    let a = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers });
    let products = await a.json();
    // console.log('products', products);
    return {
        props: { products: products },
    };
}

export default Products;
