"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >

            <SectionHeading children={"About Me"} />

            <p className="mb-3">
                I am currently pursuing my B-Tech in{" "}
                <span className="font-medium">Computer Science and Engineering</span>. I have a great
                passion for programming and{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I love the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with{" "}<span className="font-medium">C++, C and Python</span>.  I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                I've solved over{" "} <span className="font-medium">400 problems in Leetcode</span>.
                {""}<span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I'm also
                learning how to play the guitar.
            </p>
        </motion.section >
    )
}

export default About;