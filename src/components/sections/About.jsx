// src/components/sections/About.jsx
import { useEffect, useRef, useState } from 'react';

// Reveal Animation Components
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
      className={`transition-all duration-700 ease-out delay-${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const RevealFromLeft = ({ children, delay = 0 }) => {
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
      className={`transition-all duration-700 ease-out delay-${delay} ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
    >
      {children}
    </div>
  );
};

const RevealFromRight = ({ children, delay = 0 }) => {
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
      className={`transition-all duration-700 ease-out delay-${delay} ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      {children}
    </div>
  );
};

// Skill Item with individual animation
const SkillItem = ({ children, index }) => {
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
      className={`bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {children}
    </span>
  );
};

// Main About Component
export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <RevealFromTop>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
        </RevealFromTop>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Content Column */}
          <div className="flex-1">
            <RevealFromTop delay="100">
              <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                  Passionate developer with expertise in building scalable web
                  applications and creating innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <RevealFromLeft delay="200">
                      <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    </RevealFromLeft>
                    <div className="flex flex-wrap gap-2">
                      {frontendSkills.map((tech, index) => (
                        <SkillItem key={index} index={index}>
                          {tech}
                        </SkillItem>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                    <RevealFromRight delay="200">
                      <h3 className="text-xl font-bold mb-4">Backend</h3>
                    </RevealFromRight>
                    <div className="flex flex-wrap gap-2">
                      {backendSkills.map((tech, index) => (
                        <SkillItem key={index} index={index + frontendSkills.length}>
                          {tech}
                        </SkillItem>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealFromTop>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <RevealFromLeft delay="300">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      <strong>B.S. in Computer Science</strong> - XYZ University (2016-2020)
                    </li>
                    <li>Relevant Coursework: Data Structures, Web Development, Cloud Computing...</li>
                  </ul>
                </div>
              </RevealFromLeft>

              <RevealFromRight delay="300">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold">Software Engineer at ABC Corp (2020 - Present)</h4>
                      <p>Developed and maintained microservices for cloud-based applications.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Intern at DEF Startups (2019)</h4>
                      <p>Assisted in building front-end components and integration REST APIs</p>
                    </div>
                  </div>
                </div>
              </RevealFromRight>
            </div>
          </div>

          {/* Image Column */}
          <RevealFromRight delay="400">
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group">
                <img 
                  src="/images/profile.jpg" // Image path remains unchanged
                  alt="Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
            </div>
          </RevealFromRight>
        </div>
      </div>
    </section>
  );
};