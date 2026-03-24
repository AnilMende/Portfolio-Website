import { motion } from "framer-motion";

const ProjectCard = ({ title, desc, tech, github, live }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-[#111] p-6 rounded-xl shadow-lg border border-gray-800"
        >
            <h3 className="text-xl font-semibold text-white">{title}</h3>

            <p className="text-gray-400 mt-3">{desc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {tech.map((t, i) => (
                    <span
                        key={i}
                        className="text-sm px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className="mt-5 flex gap-4">
                <a
                    href={github}
                    target="_blank"
                    className="text-sm px-4 py-2 bg-white text-black rounded-md"
                >
                    GitHub
                </a>

                <a
                    href={live}
                    target="_blank"
                    className="text-sm px-4 py-2 border border-white text-white rounded-md"
                >
                    Live
                </a>
            </div>
        </motion.div>
    )
}

export default ProjectCard;