"use client"
import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { projectsData } from "@/lib/data"

import { useSectionInView } from "@/lib/hooks";



const Projects = () => {

    const { ref } = useSectionInView("Projects",0.1);
 
    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}



export default Projects;