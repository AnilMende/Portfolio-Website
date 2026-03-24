
import { useState } from "react";

const Navbar = () => {

    const [active, setActive] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "featured", label: "Project" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id : "about" , label : "About" },
        { id: "contact", label: "Contact" },
    ];


    const handleScroll = (id) => {
        setActive(id);

        document.getElementById(id).scrollIntoView({
            behavior : "smooth"
        })
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 text-white">

            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                <h1 onClick={() => handleScroll("home")} className="font-bold text-lg cursor-pointer">Anil</h1>

                <div className="flex gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`text-sm ${active === item.id ? "text-white" : "text-gray-400"
                                } hover:text-white transition cursor-pointer`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

            </div>
        </nav>
    )
}

export default Navbar;