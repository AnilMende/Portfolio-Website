
import { motion } from "framer-motion";

const Hero = () => {

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        })
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center text-center bg-black text-white">

            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-white"
            >
                Anil Kumar Mende
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mt-4 text-xl text-gray-400"
            >
                Backend Engineer | Full Stack Developer
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="mt-6 flex flex-col md:flex-row gap-4"
            >
                <button
                    onClick={() => handleScroll("projects")}
                    className="px-6 py-2 bg-white text-black rounded-lg 
                    hover:scale-105 transition cursor-pointer"
                >
                    View Projects
                </button>

                <button
                    onClick={() => handleScroll("contact")}
                    className="px-6 py-2 bg-white text-black rounded-lg 
                    hover:scale-105 transition cursor-pointer"
                >
                    Contact
                </button>

                {/* ✅ Resume Download */}
                <a
                    href="/AnilKumarM_resume.pdf"
                    download
                    className="px-6 py-2 bg-gray-800
                     text-white rounded-lg text-center hover:scale-105 transition"
                >
                    Download Resume
                </a>

            </motion.div>

        </div>
    )
}

export default Hero;