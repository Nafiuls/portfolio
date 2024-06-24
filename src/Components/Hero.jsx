import { motion } from "framer-motion"
const Hero = () => {
    return (
        <div className="border-b flex h-screen justify-center  border-neutral-900  ">
            <div className="">
                <div className="w-full  ">
                    <div className="flex flex-col items-center justify-center text-center">
                        <motion.h1 initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1, }}
                            transition={{ duration: 0.5 }} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">NAFIUL SIAM
                        </motion.h1>
                        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1, }}
                            transition={{ duration: 0.5, delay: 0.5 }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight  text-transparent">
                            FRONT-END DEVELOPER
                        </motion.span >
                        <motion.p initial={{ y: 100, opacity: 0 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }} className="my-3 max-w-3xl font-light tracking-tighter">Hello! I'm Nafiul Siam, a passionate and creative Front-End Developer with a strong background in crafting dynamic and responsive web applications. With a keen eye for design and a solid understanding of the latest web technologies, I strive to create engaging user experiences that are both visually appealing and highly functional.</motion.p>
                    </div>
                </div>
                {/* img */}
            </div>
        </div>
    )
}

export default Hero