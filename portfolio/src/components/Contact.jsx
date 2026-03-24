
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="bg-black text-white py-20 px-6">

            <div className="max-w-4xl mx-auto text-center">

                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold"
                >
                    Contact Me
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-6 text-gray-400"
                >
                    Open to backend and full-stack opportunities. Let’s connect.
                </motion.p>

                <div className="mt-8 flex justify-center gap-6">

                    <a
                        href="mailto:anilmende2002@gmail.com"
                        className="px-6 py-2 bg-white text-black rounded-lg"
                    >
                        Email
                    </a>

                    <a
                        href="https://github.com/AnilMende"
                        target="_blank"
                        className="px-6 py-2 border border-white rounded-lg"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/mende-anilkumar-284791228/"
                        target="_blank"
                        className="px-6 py-2 border border-white rounded-lg"
                    >
                        LinkedIn
                    </a>

                </div>

            </div>
        </section>
    )
}

export default Contact;