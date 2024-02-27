"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion"
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {

    const { ref } = useSectionInView("Home");

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}>
                        <Image
                            src="/profile.png"
                            alt="Sai Kumar Kanuri"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />

                        <motion.span className="absolute bottom-0 right-0 text-4xl"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 125,
                                delay: 0.1,
                                duration: 0.7,
                            }}
                        >
                            👋
                        </motion.span>

                    </motion.div>

                </div>
            </div>

            <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Sai Kumar Kanuri,</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> pursuing my B.Tech in{" "}
                <span className="font-bold">Computer Science and Engineering.</span> I enjoy
                building <span className="italic">websites</span>. My focus is{" "}
                <span className="underline">React and Nodejs</span>.
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium "
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact Me Here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /></Link>
                <a className="group bg-white px-7 py-3 flex items-center gap-2 dark:text-gray-900 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" href="/CV.pdf" download>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /></a>
                <a href="https://www.linkedin.com/in/sai-kumar-kanuri/" target="_blank" className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"><BsLinkedin /></a>
                <a href="https://github.com/Sai-Kumar-Kanuri" target="_blank" className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"><FaGithubSquare /></a>
                <a href="https://leetcode.com/Skanuri/" target="_blank" className=" bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"><SiLeetcode /></a>
            </motion.div>
        </section>
    )
}

export default Intro;