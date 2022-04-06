import { useRouter } from "next/router";
import NavBar from "../components/NavBar";

export default function Layout({children }) {
    const router = useRouter();
    console.log(router);

    return (
        <>
            <NavBar/>
            <div>{children}</div>
        </>
    );
}