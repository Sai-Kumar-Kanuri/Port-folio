"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks";

const About = () => {

    const { ref } = useSectionInView("About");

    return (
        <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >

            {/* <SectionHeading children={"About Me"} /> */}

            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                I completed my B.Tech in{" "}
                <span className="font-medium">Computer Science and Engineering in May 2024</span>. I have a great
                passion for programming and{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect and the
                satisfaction of reaching its solution. My core stack
                includes{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with{" "}<span className="font-medium">C++, C and Python</span>.  I always look forward to
                learn new technologies and I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a Software
                Developer.
            </p>

            <p>
                I've solved over{" "} <span className="font-medium">400 problems in Leetcode</span>.
                {/* {""}<span className="italic">When I'm not coding</span>, I enjoy playing */}
                My activities of interest include playing
                video games and watching movies, and I'am currently learning to play the guitar.
                {/* . I also enjoy{" "}
                <span className="font-medium">learning new things</span> and am currently
                learning how to play the guitar. */}
            </p>
        </motion.section >
    )
}

export default About;