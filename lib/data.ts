import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LiaAwardSolid } from "react-icons/lia";
import { BsTrophy } from "react-icons/bs"
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
// import aidforlife from "@/public/aidforlife.png"
import aidforlife from "@/public/aidforlife.png"
import notezipper from "@/public/notezipper.png"
import flightbooking from "@/public/flightbooking.png"
import sentiment from "@/public/sentiment.gif"
import snapchat from "@/public/snapchat.png"
import twitter from "@/public/twitter.png"

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
        title: "Ascent Junior College",
        location: "Visakhapatnam,India ",
        description:
            "12th Grade",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Data Science Hack",
        location: "Chennai, India",
        description:
            "Won 2nd Position at Data Science Hack'22",
        icon: React.createElement(BsTrophy),
        date: "Sep-2022",
    },
    {
        title: "Temenos Adopt IT Scholarship",
        location: "Chennai, India",
        description:
            "Was awarded Temenos Adopt IT Scholarship for academic excellence",
        icon: React.createElement(LiaAwardSolid),
        date: "Feb-2023",
    },
    {
        title: "Computer Science and Engineering",
        location: "Chennai,India",
        description:
            "Pursuing B-tech in CSE at SRM Institute of Science and Technology,Kattankulathur",
        icon: React.createElement(LuGraduationCap),
        date: "2020 - Present",
    },
    // {
    //     title: "Full-Stack Developer",
    //     location: "Houston, TX",
    //     description:
    //         "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    //     icon: React.createElement(FaReact),
    //     date: "2021 - present",
    // }
] as const;

export const projectsData = [
    {
        title: "Snapchat Clone",
        description:
            "Real-time messaging app built with Next.js, TypeScript, MongoDB, Tailwind CSS and Cloudinary integration for optimized image storage.",
        tags: ["Nextjs", "TypeScript", "TailwindCSS", "Shadcn", "MongoDB", "Cloudinary"],
        imageUrl: snapchat,
        href: `https://github.com/Sai-Kumar-Kanuri/Snapchat-Clone`
    },
    {
        title: "Twitter Clone",
        description:
            `Successfully implemented core backend features  Follow, Unfollow, Create Tweet, Delete
            Tweet, and Timeline functionalities.`,
        tags: ["React", "JavaScript", "Express", "Nodejs", "MongoDB", "Tailwind", "Redux"],
        imageUrl: twitter,
        href: `https://github.com/Sai-Kumar-Kanuri/Twitter-Clone-Frontend`
    },
    {
        title: "NoteZipper",
        description:
            "NoteZipper is a web application that allows users to create, organize, and manage their digital notes in a seamless and efficient manner.",
        tags: ["React", "JavaScript", "Express", "Nodejs", "MongoDB", "Tailwind", "Redux"],
        imageUrl: notezipper,
        href: `https://github.com/Sai-Kumar-Kanuri/NoteZipper`
    },
    {
        title: "Flight Booking Portal",
        description:
            "eveloped a flight management system which has both admin and user roles using MERN stack.Usage of JSON Web Tokens for authentication in all the routes.",
        tags: ["React", "MongoDB", "Express", "NodeJS", "JavaScript"],
        imageUrl: flightbooking,
        href: `https://github.com/Sai-Kumar-Kanuri/FlightBooking`
    },
    {
        title: "Aid For Life",
        description:
            "Developed a live tracking software similar to Uber or Ola where a person can quickly book an ambulance by providing the specifics of their emergency.",
        tags: ["Flutter", "HTML", "MongoDB", "CSS", "JavaScript"],
        imageUrl: aidforlife,
        href: `https://github.com/Sai-Kumar-Kanuri/dsc_hacks_technyts`
    },
    {
        title: "IMDB Rating Prediction",
        description:
            "An end-to-end toolkit on building a movie review sentiment classification LSTM model in Keras Deep Learning",
        tags: ["Sentiment", "NLP", "Python", "Keras", "Numpy", "Flask"],
        imageUrl: sentiment,
        href: `https://github.com/Sai-Kumar-Kanuri/Sentiment-Analysis`
    }
] as const;

export const skillsData = [
    "C++",
    "Data Structures",
    "C-Programming",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "Express.js",
    "Mongoose",
    "MongoDB",
    "Redux",
    "TypeScript",
    "HTML",
    "CSS",
    "Git",
    "MySQL",
    "Prisma",
    "Python"
] as const; 