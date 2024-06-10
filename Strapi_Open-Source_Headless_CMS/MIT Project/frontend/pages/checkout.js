import React, { useEffect, useState, useContext } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js'
import AuthContext from "../context/AuthContext";

const stripePromise = loadStripe('pk_test_51MbmkqBrm8aqgJreIFB9tuN1KwYPwHemd3eAMxRYXZtQhx238hNkWAR4sY9ZZkVYe4GrCHQoHavdcCUa6LYofjrR00FZVx8S3T')

const Checkout = ({ cart }) => {
    const [subtotal, setSubtotal] = useState(0)
    const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" })

    const { user, getToken } = useContext(AuthContext);
    const router = useRouter();

    console.log('stripePromise', stripePromise);

    useEffect(() => {
        let myTotal = 0
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            myTotal = myTotal + cart[index][1]
        }
        setSubtotal(myTotal)

    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        console.log({ ...form, [e.target.name]: e.target.value })
    }

    const submit = async (e) => {
        const stripe = await stripePromise
        const token = await getToken()
        console.log("handleBuy token", token)
        e.preventDefault()
        console.log('cart', cart);
        const {sessionId} = await fetch('http://localhost:1337/api/orders'
        , {
                method: 'POST',
                // body: JSON.stringify({cart}),
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
        })
        // console.log('res', res)
        // const session = await res.json()
        // console.log("session", session.data)
        console.log("stripe", stripe)

        // await stripe.redirectToCheckout({
        await stripe.checkout.sessions.create({
            mode: 'payment',
            cart,
            successUrl: `${window.location.origin}?session_id=123`,
            cancelUrl: window.location.origin,
            sessionId
        });


        // var config = {
        //     "root": "",
        //     "flow": "DEFAULT",
        //     "data": {
        //         "orderId": orderId, /* update order id */
        //         "token": content.body.txnToken, /* update token value */
        //         "tokenType": "TXN_TOKEN",
        //         "amount": subtotal /* update amount */
        //     },
        //     "handler": {
        //         "notifyMerchant": function (eventName, data) {
        //             console.log("notifyMerchant handler function called");
        //             console.log("eventName => ", eventName);
        //             console.log("data => ", data);
        //         }
        //     }
        // };

        // if (window.Paytm && window.Paytm.CheckoutJS) {
        //     // initialze configuration using init method 
        //     window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
        //         // after successfully updating configuration, invoke JS Checkout
        //         window.Paytm.CheckoutJS.invoke();
        //     }).catch(function onError(error) {
        //         console.log("error => ", error);
        //     });
        // }
    }

    const redirectToLogin = async () => {
        router.push('/login')
    }

    return (
        <div>
            <Script id={"paytm"} type="application/javascript" crossorigin="anonymous" src={`https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_MID}.js`} > </Script>


            <section className="text-black body-font relative">
                <div className="container px-5 py-24 mx-auto min-h-screen">
                    <div className="flex flex-col w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Checkout</h1>
                        <h2 className='text-2xl font-medium'>Cart</h2>
                        <div className="cart">{cart.length ? `Your cart details are as follows:` : `Your cart is empty!`}</div>
                        <ul className='list-decimal px-8'>

                            {cart.map((item) => {
                                return <li key={item.id}>
                                    Product {item[0]} with a price of Rs.{item[1]}
                                </li>
                            })}
                        </ul>
                        <div className="font-bold">
                            Subtotal: {subtotal}
                        </div>

                    </div>
                    <div className=" ">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2  w-1/2 ">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input placeholder='Full Name' onChange={handleChange} value={form.name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2  ">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input placeholder='someone@example.com' onChange={handleChange} value={form.email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2  ">
                                <div className="relative">
                                    <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                                    <input onChange={handleChange} value={form.phone} type="number" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                                    <textarea onChange={handleChange} value={form.address} id="address" name="address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                {
                                    user ?
                                        <button onClick={submit} className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay Now</button>
                                    :
                                        <button onClick={redirectToLogin} className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login to Pay Now</button>
                                }
                            </div>

                        </div>



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Checkout