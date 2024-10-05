import { motion } from "framer-motion"
import { RiReactjsLine } from "react-icons/ri"
import { FaFigma, FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma, IoLogoWordpress } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 ">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="mt-10 mb-10 lg:mb-20  text-center text-4xl  bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Technologies</motion.h1>
            <div className="flex flex-col items-center justify-center  text-white pb-40 lg:flex lg:flex-row lg:gap-8">
                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }} className="p-6 backdrop-blur-sm bg-white/10 rounded-lg lg:mt-10 max-w-xs mb-10 hover:bg-slate-800 cursor-pointer ">
                    <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Frontend</h2>
                    <div className="grid grid-cols-2 w-60">
                        <div className=" flex items-center justify-center border rounded border-neutral-400 h-12 w-28 mb-4"><RiReactjsLine className="mr-2 text-cyan-500" />
                            React Js</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-24 mb-4 ml-2"><FaHtml5 className="mr-2 text-orange-600" />
                            HTML</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-24 mb-4"><FaCss3Alt className="mr-2 text-blue-600" />
                            CSS</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-32 mr-20"><FaJsSquare className="mr-2 text-yellow-400" />
                            JavaScript</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-28 mb-4"><FaBootstrap className="mr-2 text-violet-600" />
                            Bootstrap</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-32 mb-4"><RiTailwindCssFill className="mr-2 text-cyan-500" />
                            TailwindCSS</div>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 backdrop-blur-sm bg-white/10 rounded-lg  max-w-xs mb-10 hover:bg-slate-800 cursor-pointer">
                    <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Backend</h2>
                    <div className="grid grid-cols-2 w-60 ">
                        <div className=" flex items-center justify-center border rounded border-neutral-400 h-12 w-24 mb-4"><FaNodeJs className="mr-2 text-green-500" />
                            Node Js</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-32 mb-4"><SiExpress className="mr-2" />Express Js</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-26"><SiMysql className="mr-2 text-yellow-400" />
                            MySQL</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-28 ml-4 mb-4 "><SiMongodb className="mr-2 text-green-500" />
                            MongoDB</div>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 backdrop-blur-sm bg-white/10 rounded-lg  max-w-xs mb-10 hover:bg-slate-800 cursor-pointer">
                    <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Machine Learning</h2>
                    <div className="grid grid-cols-2 w-60 ">
                        <div className=" flex items-center justify-center border rounded border-neutral-400 h-12 w-24 mb-4"><FaPython className="mr-2 text-orange-300" />
                            Python</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 mb-4"><SiTensorflow className="mr-2 text-orange-400" />Tensorflow</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-32"><SiGooglecolab className="mr-2 text-orange-500" />
                            GoogleColab</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-24 ml-6"><SiJupyter className="mr-2 text-orange-600" />
                            Jupyter</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-32 mt-4 mb-4"><SiScikitlearn className="mr-2 text-cyan-600" />
                            Scikit Learn</div>
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 backdrop-blur-sm bg-white/10 rounded-lg  max-w-xs mb-0 hover:bg-slate-800 cursor-pointer">
                    <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Others</h2>
                    <div className="grid grid-cols-2 w-60 ">
                        <div className=" flex items-center justify-center border rounded border-neutral-400 h-12 w-24 mb-4"><FaGitAlt className="mr-2 text-orange-500" />
                            Git</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 mb-4 w-32"><FaGithub className="mr-2" />GitHub</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 w-30  "><VscVscode className="mr-2 text-blue-500" />
                            VS Code</div>
                        <div className="flex items-center justify-center border rounded border-neutral-400 h-12 ml-4 w-28 mb-4"><IoLogoFigma className="mr-2 text-green-300" />
                            Figma</div>
                            <div className="flex items-center justify-center border rounded border-neutral-400 h-12  w-32 mb-4"><IoLogoWordpress className="mr-2 text-green-300" />
                            Wordpress</div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Technologies