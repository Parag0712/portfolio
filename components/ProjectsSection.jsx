"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import reactBlog from '../public/Websites/React-Blog.png';
import ecommerceImage from '../public/Websites/ecommerce.png';
import noc from '../public/Websites/noc.png';
import realState from '../public/Websites/real-state.png';
import subhNetwork from '../public/Websites/subh-network.png';
import usability from '../public/Websites/usability.png';
import zomato from '../public/Websites/zomato.png';
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";


const projectsData = [
  {
    id: 1,
    title: "Mern E-commerce",
    description: "A TypeScript-powered MERN stack project for building a scalable e-commerce platform. For Read More checkout github",
    image: ecommerceImage,
    tag: ["All", "Web", "mern"],
    gitUrl: "https://github.com/Parag0712/React-Ecommerce",
    previewUrl: "https://react-ecommerce-six-tau.vercel.app/",
  },
  {
    id: 2,
    title: "Mern Real state",
    description: "The Real Estate Project is a web application designed for browsing and managing real estate listings.checkout github",
    image: realState,
    tag: ["All", "Web", "mern"],
    gitUrl: "https://github.com/Parag0712/Real_State",
    previewUrl: "https://mern-estate-project-gm2o.onrender.com/",
  },
  {
    id: 3,
    title: "Mern Certificate application",
    description: "this Certificate generator made in mern stack check github",
    image: noc,
    tag: ["All", "Web", "mern"],
    gitUrl: "https://github.com/Parag0712/NOC-React",
    previewUrl: "https://noc-react.vercel.app/",
  },
  {
    id: 4,
    title: "Subh Newtwork",
    description: "Subhnetwork: A network solution featuring MERN stack, Tailwind CSS, React Form Hook, Cloudinary, Firestore, Vite, Render.",
    image: subhNetwork,
    tag: ["All", "mern", "web"],
    gitUrl: "https://github.com/Parag0712/Mern-Project",
    previewUrl: "https://mern-subh-network-project.onrender.com/",
  },
  {
    id: 5,
    title: "React Blog App",
    description: "",
    image: reactBlog,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parag0712/React-Blog-Project",
    previewUrl: "https://react-blog-project-quxu.vercel.app/",
  },
  {
    id: 6,
    title: "usability clone",
    description: "simple html css clone",
    image: usability,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parag0712/HTML-CSS-Project/tree/main/usabilityhub%20clone",
    previewUrl: "https://usabilityparag.vercel.app/",
  },
  {
    id: 7,
    title: "zomato clone",
    description: "simple html css clone",
    image: zomato,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Parag0712/HTML-CSS-Project/tree/main/usabilityhub%20clone",
    previewUrl: "https://github.com/Parag0712/HTML-CSS-Project/tree/main/zomato%20clone",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects " className="mt-3">
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="mern"
          isSelected={tag === "mern"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-7">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
