import {useApi} from "./useApi";

export default function Products() {
    const [products, loading] = useApi();

    if(loading) {
        return <p>Loading...</p>
    }

    return(
        <div>
            {
                products.map((products) => {
                    return(
                        <div>
                            <p>{products.title}</p>
                            <img style={{width:50}} src={products.image} alt={products.category} />
                            <p>Category: {products.category}</p>
                            <p>Price: {products.price}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
}