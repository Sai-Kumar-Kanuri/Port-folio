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
import zoom from "@/public/zoom.png"
import cloud from "@/public/cloud.png"

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
    // {
    //     title: "Ascent Junior College",
    //     location: "Visakhapatnam,India ",
    //     description:
    //         "12th Grade",
    //     icon: React.createElement(LuGraduationCap),
    //     date: "2019",
    // },
    // {
    //     title: "Data Science Hack",
    //     location: "Chennai, India",
    //     description:
    //         "Won 2nd Position at Data Science Hack'22",
    //     icon: React.createElement(BsTrophy),
    //     date: "Sep-2022",
    // },
    // {
    //     title: "Temenos Adopt IT Scholarship",
    //     location: "Chennai, India",
    //     description:
    //         "Was awarded Temenos Adopt IT Scholarship for academic excellence",
    //     icon: React.createElement(LiaAwardSolid),
    //     date: "Feb-2023",
    // },
    // {
    //     title: `Hinweis Second International Conference on Advanced Research in Engineering and
    //     Technology (ARET)`,
    //     location: "Chennai,India",
    //     description:
    //         "Presented a project at the Hinweis Second International Conference on Advanced Research in Engineering and Technology (ARET) featuring an algorithm for cloud detection and motion prediction in INSAT satellite images. ",
    //     icon: React.createElement(LuGraduationCap),
    //     date: "Feb 2024",
    // },
    {
        title: "Computer Science and Engineering Engineering",
        location: "Chennai,India",
        description:
            "Graduated with a B-Tech in Computer Science and Engineering from SRM Institute of Science and Technology, Kattankulathur",
        icon: React.createElement(LuGraduationCap),
        date: "June 2024",
    },
    {
        title: "Full Stack Developer",
        location: "Bangalore, KA",
        description:
            "Developer at Tata Consultancy Services",
        icon: React.createElement(FaReact),
        date: "Jan 2025 - Present",
    }
] as const;

export const projectsData = [
    {
        title: "Zoom-Video-Conferencing-App",
        description:
            "Developed a Zoom-like video conferencing app using Next.js, TypeScript, Tailwind CSS, Shadcn, Clerk, and GetStream.",
        tags: ["Nextjs", "TypeScript", "Clerk", "GetStream", "ShadCn", "Tailwind"],
        imageUrl: zoom,
        href: `https://github.com/Sai-Kumar-Kanuri/Zoom-Video-Conferencing-App`
    },
    {
        title: "Snapchat For Devs",
        description:
            "Real-time messaging app built with Next.js, TypeScript, MongoDB, Tailwind CSS and Cloudinary integration for optimized image storage.",
        tags: ["Nextjs", "TypeScript", "Tailwind", "Shadcn", "MongoDB", "Cloudinary"],
        imageUrl: snapchat,
        href: `https://github.com/Sai-Kumar-Kanuri/Snapchat-Clone`
    },
    {
        title: "Twitter",
        description:
            `Successfully implemented core backend features  Follow, Unfollow, Create Tweet, Delete
            Tweet, and Timeline functionalities.`,
        tags: ["React", "JavaScript", "Express", "Nodejs", "MongoDB", "Tailwind", "Redux"],
        imageUrl: twitter,
        href: `https://github.com/Sai-Kumar-Kanuri/Twitter-Clone-Frontend`
    },
    {
        title: "Flight Booking Portal",
        description:
            "Developed a flight management system which has both admin and user roles using MERN stack.Usage of JSON Web Tokens for authentication in all the routes.",
        tags: ["React", "MongoDB", "Express", "NodeJS", "JavaScript"],
        imageUrl: flightbooking,
        href: `https://github.com/Sai-Kumar-Kanuri/FlightBooking`
    },
    {
        title: "Cloud Detection and Nowcasting",
        description:
            "This project presents an algorithm for cloud detection in INSAT satellite images, followed by cloud motion prediction in subsequent frames.",
        tags: ["MaskRCNN", "K-Means", "LSTM", "MPA", "Nowcasting", "Detection"],
        imageUrl: cloud,
        href: `https://github.com/Sai-Kumar-Kanuri/Cloud-Detection-and-Nowcasting-for-Ship-Navigation`
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
    "Java",
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