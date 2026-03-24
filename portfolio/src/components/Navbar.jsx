
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [active, setActive] = useState("home");

    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "featured", label: "Project" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" },
    ];


    const handleScroll = (id) => {
        setActive(id);

        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        })
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 text-white">

            <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1
                    onClick={() => handleScroll("home")}
                    className="font-bold text-lg cursor-pointer"
                >
                    Anil
                </h1>

                {/* ✅ DESKTOP MENU */}
                <div className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`text-sm ${active === item.id ? "text-white font-semibold" : "text-gray-400"
                                } hover:text-white transition cursor-pointer`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* ✅ MOBILE ICON */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* ✅ MOBILE MENU */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-black flex flex-col 
                items-center gap-6 py-6 md:hidden border-t border-gray-800">

                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                handleScroll(item.id);
                                setMenuOpen(false); // close after click
                            }}
                            className="text-white text-lg"
                        >
                            {item.label}
                        </button>
                    ))}

                </div>
            )}

        </nav>
    )
}

export default Navbar;