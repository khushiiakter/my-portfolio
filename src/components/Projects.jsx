import { motion } from "framer-motion";

import movie from "../assets/movie.png";
import Mountain from "../assets/mountain.png";
import service from "../assets/service.png";
import dream from "../assets/Screenshot 2025-01-05 002427.png";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Movie Portal",
      image: `${movie}`,
      github: "https://github.com/example/project1",
      liveLink: "https://assignment-10-bf625.web.app/",
    },
    {
      title: "Mountain Treks",
      image: `${Mountain}`,
      github: "https://github.com/example/project2",
      liveLink: "https://assignment-9-e93f8.web.app/",
    },
    {
      title: "Service Review",
      image: `${service}`,
      github: "https://github.com/example/project2",
      liveLink: "https://assignment-11-eb26e.web.app/",
    },
    {
      title: "Dream_11",
      image: `${dream}`,
      github: "https://github.com/example/project2",
      liveLink: "https://stately-youtiao-d8f56d.netlify.app/",
    },
    // Add more projects as needed
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section id="projects" className="py-10">
      <div className="px-6">
        <motion.h2
          className="text-6xl underline font-bold text-center mb-16 text-[#0F1035]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Latest Work
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
         {projects.map((project, index) => (
            <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.030,
            
            
              transition: { duration: 0.3, ease: "easeOut"},
            }}
            className="relative group bg-[#5f1a89] rounded-2xl border-4 border-[#330e4b] overflow-hidden items-start shadow-2xl transform  hover:scale-105"
            
              
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center space-y-4 slide-in">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex text-center gap-4">
                    {/* GitHub Icon */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full shadow-md hover:bg-gray-300 transition"
                    >
                      <FaGithub className="text-3xl" />
                    </a>

                    {/* Live Link Icon */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-black rounded-full shadow-md hover:bg-gray-300 transition"
                    >
                      <FaLink className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;
