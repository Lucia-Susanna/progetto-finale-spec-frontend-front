
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main className="container d-flex">
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout
