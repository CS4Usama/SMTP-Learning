import { useRouter } from "next/dist/client/router";

const DynamicRouting = () => {
    const router = useRouter();
    const dynamicNumber = router.query.dynamic;
    return(
        <div>
            <center>Dynamic Routing {dynamicNumber}</center>
        </div>
    );
}

export default DynamicRouting;
