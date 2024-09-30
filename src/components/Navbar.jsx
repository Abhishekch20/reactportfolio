import { motion } from "framer-motion"
import logo from "../assets/Abhishek.png";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
        <div className="flex items-center">
            <img className="w-7/12 mx-2 lg:ml-10" src={logo} alt="logo" />
        </div>
        <motion.div
        whileInView={{ opacity: 1, x:0}}
        initial={{ opacity:0, x: 100}}
        transition={{duration: 1}}
        className="mr-8 lg:mr-16 flex items-center justify-center gap-4 text-2xl ">
        <a href="https://github.com/Abhishekch20"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/abhishek-chiluveru-a72a37260/"><FaLinkedin /></a>
            <a href="https://twitter.com/AbhishekCh119"><FaSquareXTwitter /></a>
            <a href="https://www.instagram.com/abhishekchiluveru_/"><FaInstagram /></a>
        </motion.div>
    </nav>
    )
}

export default Navbar