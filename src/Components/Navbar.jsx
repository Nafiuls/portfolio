import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { motion } from "framer-motion"
const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-3">
            <div className="flex flex-shrink-0 items-center">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1, }} transition={{ duration: 0.5 }}
                    className="text-[30px] font-black text-white ">NS</motion.span>
            </div>
            {/* ICONS */}
            <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className="m-8 flex  items-center justify-center gap-4 text-2xl">
                <motion.a whileHover={{ scale: 1.3 }} href="https://www.linkedin.com/in/nafiulsiam/" target="_blank">
                    <FaLinkedin />
                </motion.a>
                <motion.a whileHover={{ scale: 1.3 }} href="https://github.com/Nafiuls" target="_blank"><FaGithub /></motion.a>
                <motion.a whileHover={{ scale: 1.3 }} href="https://www.facebook.com/nafiul.siam.5/" target="_blank"><FaFacebook /></motion.a>
                <motion.a whileHover={{ scale: 1.3 }} href="https://www.instagram.com/nafiul_siam/" target="_blank"><FaInstagram /></motion.a>
            </motion.div>
        </nav>
    )
}

export default Navbar
