
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="about" className="bg-black text-white py-20 px-6">

            <div className="max-w-5xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center"
                >
                    About Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-10 text-gray-300 text-lg leading-relaxed"
                >
                    Backend Software Engineer with 1.5+ years of freelance experience building scalable web applications using Node.js, Express.js, MongoDB, Redis, and MySQL. Skilled in REST API development, JWT authentication, RBAC, Redis caching, Socket.io, and distributed backend systems.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-6 text-gray-300 text-lg leading-relaxed"
                >
                    Built and deployed production-ready applications across healthcare, edtech, and food & beverage domains. Reduced job failure rates from 60% to 18% and achieved 38 requests/sec under 100+ concurrent users through BullMQ, Redis, concurrency optimization, and load testing. My focus is on writing
                    clean, maintainable code and building systems that can scale efficiently.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-6 text-gray-400 text-lg leading-relaxed"
                >
                    Currently, I am focused on strengthening my system design skills,
                    improving backend performance, and preparing for backend engineering roles.
                </motion.p>

            </div>
        </div>
    )
}

export default About;