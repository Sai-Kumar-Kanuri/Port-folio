import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
// import aidforlife from "@/public/aidforlife.png"
import aidforlife from "@/public/aidforlife.png"
import notezipper from "@/public/notezipper.png"
import flightbooking from "@/public/flightbooking.png"
import sentiment from "@/public/sentiment.gif"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "NoteZipper",
        description:
            "NoteZipper is a web application that allows users to create, organize, and manage their digital notes in a seamless and efficient manner.",
        tags: ["React", "JavaScript", "Express", "Nodejs", "MongoDB", "Tailwind", "Redux"],
        imageUrl: notezipper,
    },
    {
        title: "Flight Booking Portal",
        description:
            "eveloped a flight management system which has both admin and user roles using MERN stack.Usage of JSON Web Tokens for authentication in all the routes.",
        tags: ["React", "MongoDB", "Express", "NodeJS", "JavaScript"],
        imageUrl: flightbooking,
    },
    {
        title: "Aid For Life",
        description:
            "Developed a live tracking software similar to Uber or Ola where a person can quickly book an ambulance by providing the specifics of their emergency.",
        tags: ["Flutter", "HTML", "MongoDB", "CSS", "JavaScript"],
        imageUrl: aidforlife,
    },
    {
        title: "IMDB Rating Prediction",
        description:
            "An end-to-end toolkit on building a movie review sentiment classification LSTM model in Keras Deep Learning",
        tags: ["Sentiment", "NLP", "Python", "Keras", "Numpy", "Flask"],
        imageUrl: sentiment,
    }
] as const;

export const skillsData = [
    "C++",
    "Data Structures",
    "C-Programming",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Mongoose",
    "MongoDB",
    "React",
    "Git",
    "MySQL",
    "Redux",
    "Tailwind",
    "TypeScript",
    "Next.js",
    "Prisma",
    "Python"
] as const;