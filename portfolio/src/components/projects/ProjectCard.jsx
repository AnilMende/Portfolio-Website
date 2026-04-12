import { motion } from "framer-motion";
import { useState } from "react";

const ProjectCard = ({ title, points, tech, github, live, coverImage }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#111] rounded-xl shadow-lg border border-gray-800 overflow-hidden"
        >
            {/* Image */}
            <div className="overflow-hidden">
                <motion.img
                    src={coverImage}
                    alt={title}
                    className="w-full h-56 object-cover"
                    whileHover={{ scale: 1.1 }}
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{title}</h3>

                {/* Toggle Button */}
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-sm text-blue-400 mt-3 hover:underline"
                >
                    {showDetails ? "Hide Details" : "View Details"}
                </button>

                {/* Bullet Points */}
                {showDetails && (
                    <ul className="mt-3 text-gray-400 text-sm space-y-2">
                        {points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">•</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full hover:bg-white hover:text-black transition"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-4">
                    <a href={github} target="_blank" rel="noopener noreferrer"
                        className="text-sm px-4 py-2 bg-white text-black rounded-md">
                        GitHub
                    </a>

                    <a href={live} target="_blank" rel="noopener noreferrer"
                        className="text-sm px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-black transition">
                        Live
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;