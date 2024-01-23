import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

const RootLayout = ({children}) => {
    return(
        <html lang="en">
            <Header/>
            {children}
            <Footer/>
        </html>
    )
}

export default RootLayout;