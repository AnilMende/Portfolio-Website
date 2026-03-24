import { motion } from "framer-motion";
import ArchitectureDiagram from "../ArchitectureDiagram";

const FeaturedProject = () => {
    return (
        <div id="featured" className="bg-black text-white py-20 px-6">

            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center"
            >
                Featured Project
            </motion.h2>

            <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-semibold">
                        Scalable Backend API System
                    </h3>

                    <p className="mt-4 text-gray-400">
                        Built a production-grade backend architecture with secure authentication,
                        caching, and scalable API design.
                    </p>

                    <ul className="mt-6 space-y-3 text-gray-300">
                        <li>• JWT Authentication with refresh token rotation</li>
                        <li>• Redis caching for performance optimization</li>
                        <li>• Secure email verification & password reset</li>
                        <li>• Rate limiting, Helmet, input validation</li>
                        <li>• Modular MVC architecture</li>
                    </ul>

                    <div className="mt-6 flex gap-4">
                        <a
                            href="https://github.com/AnilMende/Production-Backend-System"
                            target="_blank"
                            className="px-5 py-2 bg-white text-black rounded-lg"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://production-backend-system-3.onrender.com/"
                            target="_blank"
                            className="px-5 py-2 border border-white rounded-lg"
                        >
                            Live API
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT SIDE - DIAGRAM */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}

                    className="w-full h-75"
                >
                    <ArchitectureDiagram />
                </motion.div>
            </div>


        </div>
    )
}
export default FeaturedProject;