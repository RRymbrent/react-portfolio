import { useEffect, useRef, useState } from 'react';

import theleadtree from '../../images/TheLeadTree.png';
import devdarlings from '../../images/devdarlings.png';
import ikvwa from '../../images/ikvwa.png';
import maxxiwrld from '../../images/MAXXIWRL.png';

const RevealFromTop = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const RevealFromBottom = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const TechItem = ({ children, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={` text-white py-1 px-3 rounded-full text-sm hover:text-yellow-300 transition transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </span>
  );
};

export const Projects = () => {
  const projects = [
    {
      id: "project-1",
      title: "The Lead Tree",
      description: "The Lead Tree delivers world-class, customized lead generation. Each campaign is built around your criteria, with dedicated agents, exclusive scripts, and premium-quality leads tailored just for you.",
      technologies: ["Wordpress", "PHP"],
      image: theleadtree,
      link: "https://theleadtree.com"
    },
    {
      id: "project-2",
      title: "Devdarlings",
      description: "Devdarling is an online platform for sending personalized birthday cards, making it easy to celebrate loved ones with thoughtful messages and beautiful designs.",
      technologies: ["HTML", "CSS", "Bitbucket-API", "Google Excel"],
      image: devdarlings,
      link: "https://devdarlings.bitbucket.io"
    },
    {
      id: "project-3",
      title: "IKVWA",
      description: "This interactive web app is designed to help you grow your Kapampangan vocabulary. It makes learning engaging, effective, and fun.",
      technologies: ["Angular", "TypeScript", "Laravel", "Lumen", "MySql"],
      image: ikvwa,
      link: "https://ikvwa.com"
    },
    {
      id: "project-4",
      title: "MAXXIWRLD",
      description: "MAXXIWRLD is a music blog that highlights diverse genres and artists from around the world. It’s your go-to spot for discovering fresh sounds and emerging talent.",
      technologies: ["Wordpress"],
      image: maxxiwrld,
      link: "https://maxxiwrld.wordpress.com"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <RevealFromTop>
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-7xl font-bold">
              Featured <span className="text-yellow-300">Projects</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mt-4 mx-auto w-50 rounded-full transition-all duration-700" />
          </div>
        </RevealFromTop>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <RevealFromBottom key={project.id} delay={index * 100}>
            <div className="group relative overflow-hidden rounded-xl border-2 hover:border-yellow-300 border-white/100 backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_20px_25px_rgba(0,0,0,0.1)] transition-all duration-300">
              <a href={project.link} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-yellow-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <TechItem key={tech} index={techIndex}>
                        {tech}
                      </TechItem>
                    ))}
                  </div>
          
                  <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform duration-300">
                    <span className="text-white hover:text-yellow-300 transition-colors flex items-center gap-1">
                      View Project 
                      <span className="inline-block animate-bounce-right">→</span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </RevealFromBottom>
          ))}
        </div>
      </div>
    </section>
  );
};