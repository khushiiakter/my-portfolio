import { motion } from "framer-motion";
import js from "../assets/icons8-javascript-48.png"
import node from "../assets/noddee.png"
import css from "../assets/icons8-css3-48.png"
import react from "../assets/react.png";
import mongo from "../assets/icons8-mongo-db-48.png";
import firebase from "../assets/icons8-firebase-48.png";

// import tail from "../assets/png-transparent-tailwind-css-hd-logo.png"
const Skills = () => {
  const skills = [
    
    { name: "HTML5", image: "https://i.ibb.co.com/Lzs5mvf/icons8-html-48.png" },
    { name: "JavaScript", image: `${js}` },
    
    { name: "Node.js", image:`${node}`},
    { name: "Firebase", image: `${firebase}`},
    { name: "MongoDB", image: `${mongo}` },
    { name: "React", image: `${react}` },
    { name: "CSS", image: `${css}`},
    // { name: "Tailwind", image: `${tail}` },
  ];

  return (
    <section id="skills"
      className=" py-10"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="border py-16 px-6">
        <h2 className=" text-6xl font-extrabold text-center text-[#0F1035] underline mb-20">
          Skills
        </h2>
        <div className="flex justify-center py-8 items-center gap-8 flex-wrap">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-[#0F1035] to-[#5f1a89] shadow-lg p-6 rounded-2xl flex flex-col justify-center h-44 w-36 items-center skill-card`}
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16  object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .skill-card {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
