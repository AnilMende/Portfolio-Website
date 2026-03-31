
import { motion } from "framer-motion";

const skillsData = [
    {
        title : "Languages",
        skills : ["JavaScript (ES6+)", "Java", "Python"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "Scalable Backend Systems"],
    },
    {
        title: "Database & Caching",
        skills: ["MongoDB (Mongoose)", "MySQL", "Redis (Caching & Invalidation)", "Database Schema Design"],
    },
    {
        title : "Security & Authentication",
        skills : ["JWT (Access & Refresh Tokens)", "Input Validation (Joi)", "Rate Limiting", "Helmet.js", "CORS"]
    },
    {
        title: "Frontend",
        skills: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "Github", "Postman", "Socket.io", "Cloudinary", "Render", "Environment Configuration (dotenv)"],
    },
];


const Skills = () => {
    return (
        <div id="skills" className="bg-black text-white py-20 px-6">

            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center"
            >
                Skills
            </motion.h2>

            <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">

                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-[#111] p-6 rounded-xl border border-gray-800"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm bg-gray-800 rounded-full
                                     text-gray-300 hover:bg-white hover:text-black transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                    </motion.div>
                ))}

            </div>
        </div>
    )
}

export default Skills;