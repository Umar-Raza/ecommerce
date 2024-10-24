import { Footer } from "../footer/Footer"
import { Navbar } from "../navbar/Navbar"
export const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="main-content">
                {children}
            </div>
            <Footer />
        </>
    )
}
