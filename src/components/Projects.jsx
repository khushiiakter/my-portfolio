import { motion } from "framer-motion";

import earnly from "../assets/earnly.png";
import gadet from "../assets/gadets.png";
import cricket from "../assets/cricket.png";
import Mountain from "../assets/mountain.png";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movie Portal",
      image: `https://i.ibb.co.com/67VnWmkD/Screenshot-2025-02-05-152815.png`,
      github: "https://github.com/khushiiakter/Movie-Portal",
      liveLink: "https://assignment-10-bf625.web.app/",
      techStack:
        "React.js,Javascript, Tailwind CSS, MongoDB , Node.js, Express, JWT, html5, Firebase",
      description:
        "This website is a dynamic movie portal designed to enhance your cinematic journey. Explore a vast database of movies, read real user reviews, and enjoy personalized recommendations based on your interests. With a sleek, dark-themed interface and cutting-edge features, MovieZone is your ultimate destination for the latest trends in cinema",
      challenges: "Implementing secure authentication and API data fetching.",
      improvements: "Adding more movie filters and enhancing UI.",
    },
    {
      id: 2,
      title: "Service Review",
      image: `https://i.ibb.co.com/XfQJrj39/Screenshot-2025-02-05-152922.png`,
      github: "https://github.com/khushiiakter/Service-Review",
      liveLink: "https://assignment-11-eb26e.web.app/",
      techStack:
        "React.js,Javascript, Tailwind CSS, MongoDB , Node.js, Express, JWT, html5, Firebase",
      description:
        "Service Review System is a full-stack application designed to provide users with a platform for exploring, reviewing, and sharing feedback on various services. It aims to empower users with trusted information and insights to make informed decisions.",
      challenges: "Ensuring real-time updates.",
      improvements: "Enhancing map integration and adding more routes.",
    },
    {
      id: 3,
      title: "Earnly",
      image: `${earnly}`,
      github: "https://github.com/khushiiakter/Earnly",
      liveLink: "https://earnly-fad73.web.app/",
      techStack:
        "React.js, Javascript, Tailwind CSS, MongoDB, Node.js, Express, Firebase, JWT, Stripe, HTML5",
      description:
        "The Micro Tasking and Earning Platform is designed to provide users with opportunities to complete small tasks and earn money. The platform accommodates 3 distinct roles: Worker, Buyer, and Admin. Each role is tailored with specific functionalities to ensure seamless task management, task creation, and platform administration.",
      challenges: "Ensuring real-time updates and dashboard updates.",
      improvements: "Enhancing map integration and adding more routes.",
    },
    {
      id: 4,
      title: "Mountain Treks",
      image: `${Mountain}`,
      github: "https://github.com/khushiiakter/Mountain-Treks",
      liveLink: "https://assignment-9-e93f8.web.app/",
      techStack: "React.js, Javascript, Tailwind CSS, HTML5, Firebase",
      description:
        "Welcome to Mountain Treks, a platform designed to help adventure enthusiasts plan and book unforgettable hiking experiences. Whether you're looking for serene escapes or thrilling expeditions, we've got you covered.",
      challenges: "Ensuring real-time updates and managing user bookings.",
      improvements: "Enhancing map integration and adding more routes.",
    },
    {
      id: 5,
      title: "GadgetHeaven",
      image: `${gadet}`,
      github: "https://github.com/khushiiakter/Assignment-008",
      liveLink: "https://stately-youtiao-d8f56d.netlify.app/",
      techStack: "React.js, Javascript, Tailwind CSS, HTML5",
      description: `GadgetHeaven✨ is a modern e-commerce platform designed for tech enthusiasts, offering a seamless shopping experience for the latest gadgets. With an intuitive interface, users can explore categories like smartphones, smartwatches, and accessories through a well-structured navigation system. The platform features dynamic product displays, detailed product pages, and efficient sorting and filtering options to help users find their desired gadgets effortlessly. A shopping cart and wishlist system, managed via Context API and LocalStorage, ensures smooth functionality, while interactive elements like toasts for cart actions and purchase confirmation modals enhance user engagement. The site also handles edge cases efficiently, preventing errors on reloads and ensuring a reliable browsing experience with dynamic navigation and a robust 404 page. GadgetHeaven is the ultimate destination where innovation meets convenience, making gadget shopping more exciting and hassle-free. 🚀`,
      challenges: "Managing state efficiently with Context API and LocalStorage while ensuring data persistence and dynamic UI updates is a key challenge. Handling edge cases like wishlist restrictions, price limits, and proper navigation adds complexity. Implementing a smooth purchase confirmation modal and dynamic styling with useLocation() also requires careful execution.",
      improvements: "Optimizing state management, lazy loading images, and enhancing UI responsiveness will boost performance. Adding search functionality, better sorting options, and user authentication will improve the shopping experience. Strengthening security with server-side validation will make GadgetHeaven✨ more reliable and user-friendly.",
    },
    {
      id: 6,
      title: "BPL-DREAM-11",
      image: `${cricket}`,
      github: "https://github.com/khushiiakter/assignment-7",
      liveLink: "https://chimerical-gingersnap-0fd6e3.netlify.app/",
      techStack: "React.js, Javascript, Tailwind CSS, HTML5",
      description:
        "BPL-DREAM-11 is a React-based fantasy cricket platform where users can build their dream BPL (Bangladesh Premier League) team within a set coin limit. It offers a seamless player selection process, preventing duplicate picks and ensuring balanced team management. With dynamic toggling between available and selected players, interactive alerts via React Toastify, and a responsive UI powered by Tailwind CSS, the platform delivers an engaging experience for cricket enthusiasts.",
      challenges: "Managing coin limits, preventing duplicate player selections, and ensuring seamless dynamic team management.",
      improvements: "Optimizing user interface responsiveness, adding more dynamic player filters, and enhancing real-time notifications for a smoother experience",
    },
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
                scale: 1.03,

                transition: { duration: 0.3, ease: "easeOut" },
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
                  <h3 className="text-2xl mb-2 font-semibold">
                    {project.title}
                  </h3>
                  <Link to={`/projects/${project.id}`}>
                    <button className="btn-sm btn">View More</button>
                  </Link>

                  <div className="flex text-center justify-center gap-4">
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
