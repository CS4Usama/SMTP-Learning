import {useState, useEffect} from "react";

export function useApi() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    async function fetchPoducts() {
        try {
            setLoading(true);
            let var1 = await fetch('https://fakestoreapi.com/products');
            let var2 = await var1.json();
            setProducts(var2);
            // setProducts(await var1.json());
        }
        catch(err) {
            console.log("Error is: ", err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPoducts();
    } , [] )


    return [products, loading]
}