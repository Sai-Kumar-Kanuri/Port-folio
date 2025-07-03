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
                I’m currently working as a System Engineer at Tata Consultancy Services, where I work with technologies like Spring MVC, jQuery, JavaScript, and Oracle SQL.
                I completed my B.Tech in{" "}
                <span className="font-medium">Computer Science and Engineering in May 2024</span>. I have a great
                passion for programming and{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect and the
                satisfaction of reaching its solution. My core tech stack includes <span className="font-medium">React, Next.js, Node.js, Spring Boot, jQuery, SQL, MongoDB, C++, Java, C, and Python </span> . 
                I’ve solved over 750 problems on LeetCode, which has sharpened my algorithmic thinking and problem-solving skills.
            </p>

            <p>
                {/* {""}<span className="italic">When I'm not coding</span>, I enjoy playing */}
                Beyond coding, I enjoy playing video games, watching movies, and I’m currently learning to play the guitar.
                {/* . I also enjoy{" "}
                <span className="font-medium">learning new things</span> and am currently
                learning how to play the guitar. */}
            </p>
        </motion.section >
    )
}

export default About;