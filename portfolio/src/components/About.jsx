
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
                    I'm a Software Engineer with hands-on full-stack development experience and a
                    strong passion for backend engineering. Over the past 1.5+ years as a freelance
                    developer, I've built and deployed production-ready web applications using
                    Node.js, Express.js, React.js, MongoDB, Redis, and MySQL, delivering complete
                    solutions from planning and development to deployment.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-6 text-gray-300 text-lg leading-relaxed"
                >
                    I enjoy designing scalable backend systems, building secure REST APIs,
                    implementing authentication and authorization, optimizing performance with
                    Redis caching and BullMQ, and developing event-driven applications. I've
                    independently delivered projects across healthcare, edtech, and food &
                    beverage domains while focusing on clean architecture, maintainable code,
                    and real-world problem solving.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-6 text-gray-300 text-lg leading-relaxed"
                >
                    I'm continuously improving my expertise in distributed systems, system
                    design, microservices, Docker, and backend performance optimization.
                    Currently, I'm seeking Software Engineer and Backend Developer opportunities
                    where I can contribute to building reliable, high-performance applications
                    while growing alongside experienced engineering teams.
                </motion.p>

            </div>
        </div>
    )
}

export default About;