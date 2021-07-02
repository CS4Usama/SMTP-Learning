import {useGithub} from "./useGithub";

export default function Github() {
    const [user, loading, fetchGithub] = useGithub();

    if(loading) {
        return <p>loading...</p>
    }

    return (
        <div>
            <p>Usama</p>

            <button onClick={fetchGithub}>Get Follower's List</button>

            {/* <p>{user?.id}</p> */}


            {
                user?.map((user, index) => {
                    return (
                        <div>
                            <p>{index+1}: {user?.login}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}