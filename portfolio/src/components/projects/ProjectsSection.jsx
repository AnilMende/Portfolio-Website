
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects.js";

const ProjectsSection = () => {
    return (
        <div id="projects" className="bg-black text-white py-20 px-6">

            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center"
            >
                Other Projects
            </motion.h2>

            <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">

                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}

            </div>
        </div>
    )
}

export default ProjectsSection;