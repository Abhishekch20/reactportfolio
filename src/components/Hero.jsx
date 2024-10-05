import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/Abhi5.jpg"
import cv from "../assets/Abhishek Chiluveru's CV.pdf"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start ">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-14 text-6xl font-thin tracking-tight ml-20 lg:mt-14 lg:text-6xl" >
                            Abhishek Chiluveru
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent lg:ml-20">Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-1 max-w-xl py-6 ml-6 mr-6 font-light tracking-tight lg:ml-20 text-lg text-neutral-400 ">{HERO_CONTENT}
                        </motion.p>
                    </div>
                    <motion.a
                        variants={container(1.5)}
                        initial="hidden"
                        animate="visible"
                        href={cv} className="mb-8 ml-6 bg-neutral-900 px-8 py-3 text-md font-medium text-purple-500 lg:px-8 lg:py-3  rounded-xl lg:ml-20 md:ml-24">Resume</motion.a>
                </div>
                <div className="w-full lg:w-1/2 lg:p-6  ">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="h-1/2 w-60 mt-10 lg:mb-10 lg:w-1/2 lg:h-1/2 rounded" src={profilePic} alt="profilePic" />
                    </div>
                </div>
            </div>
        </div  >
    )
}

export default Hero