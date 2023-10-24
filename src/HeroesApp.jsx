import { Outlet } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import { Navbar } from "./ui/components/NavBar"

export const HeroesApp = () => {
    return (
        
        <AuthProvider>
            <Navbar/>
            <Outlet/>
        </AuthProvider>

)}