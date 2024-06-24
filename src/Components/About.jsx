import { motion } from "framer-motion"

const About = () => {


    return (
        <div className="border-b h-screen border-neutral-900  flex justify-center items-center">
            <div className="flex flex-col text-center items-center justify-center">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                    className="pb-16 text-4xl font-semibold tracking-tight lg:mt-16 lg:text-8xl uppercase">About <span className="text-neutral-500">Me</span>
                </motion.h1>
                <motion.p
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }}
                    className="my-3 max-w-5xl font-light tracking-tighter">
                    Hello! I'm Nafiul Siam, a dedicated and innovative Front-End Developer with a passion for transforming complex problems into intuitive and aesthetically pleasing digital solutions. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Tailwind CSS, I specialize in crafting sleek, responsive, and user-friendly web applications. My proficiency extends to using Chakra UI for customizable component libraries, Node.js and Express for building robust back-end services, and MongoDB and Firebase for efficient database management and real-time data handling. Additionally, I bring dynamic and engaging user experiences to life with Framer Motion. Throughout my academic journey, I have developed and honed my skills through various projects, applying best practices in coding, design, and user experience.I am eager to embark on a professional career and collaborate on exciting web development projects.
                </motion.p>
            </div>

        </div>
    )
}

export default About