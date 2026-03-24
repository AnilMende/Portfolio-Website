
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
                    I am a backend-focused software engineer specializing in building
                    scalable and secure server-side applications using Node.js and Express.
                    I have hands-on experience designing RESTful APIs, implementing JWT-based
                    authentication systems, and optimizing performance using Redis caching.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-6 text-gray-300 text-lg leading-relaxed"
                >
                    I have built production-grade systems including a scalable backend API,
                    a full-stack food delivery platform with payment integration, and a
                    real-time messaging application using Socket.io. My focus is on writing
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