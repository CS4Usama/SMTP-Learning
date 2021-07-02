import {useEffect, useState} from "react";
import {endpoint} from "../../config/endpoint";

export function useGithub() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    const fetchGithub = async () => {
        try {
            setLoading(true);
            let var1 = await fetch(`${endpoint}/users/naveed-rana/followers?per_page=100`);
            // console.log(var1.json());
            setUser(await var1.json());
        }
        catch(err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // fetchGithub();
    }, [])

    return [user, loading, fetchGithub]
}