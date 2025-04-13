
import { useEffect, useRef, useState } from 'react';
import profilepic from '../../images/profile.jpg';


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
          <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r font-bold text-center">
            About <span className='text-yellow-300'>Me</span>
          </h2>
        </RevealFromTop>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <RevealFromTop delay="100">
              <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:scale-105 transition-all">
                <p className="text-white mb-6 font-mono text-justify text-md">
                I'm <span className='text-yellow-300'>Rymbrent Rabano</span>, a recent graduate based in <span className='text-yellow-300'>Madapdap, Mabalacat, Pampanga,</span>  and a dedicated Full Stack Developer with a strong focus on frontend development and WordPress. 
                I specialize in building clean, responsive, and user-centered interfaces that offer smooth and engaging experiences across devices. 
                With a solid understanding of both <span className='text-yellow-300'>frontend</span> and <span className='text-yellow-300'>backend</span> technologies, I bring <span className='text-yellow-300'>flexibility</span> and <span className='text-yellow-300'>efficiency</span> to every project I work on.
                </p>
                <p className="text-white mb-6 font-mono text-justify">
                I’m known for my <span className='text-yellow-300'>creativity</span>, <span className='text-yellow-300'>adaptability</span>, and being a <span className='text-yellow-300'>fast learner</span>. 
                I’m always eager to take on new challenges, explore emerging technologies, and refine my skills through hands-on experience. 
                Whether developing a solution from scratch or enhancing existing systems, I aim to deliver results that are not only functional but also visually impactful.
                </p>
              </div>            
              </RevealFromTop>
          </div>
 
          <RevealFromRight delay={200}>
            <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] overflow-hidden border border-transparent hover:border-yellow-300 hover:rounded-lg transition-all duration-300 group shadow-[0_4px_20px_rgba(234,179,8,0.1)] hover:shadow-[0_8px_30px_rgba(234,179,8,0.2)]">
                <img src={profilepic} alt="Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 r"/>
                <div className="absolute inset-0 bg-gradient-to-t  via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="absolute inset-0 border-8 border-transparent  transition-all duration-700"></div>
      
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">Rymbrent Rabano</h3>
                <p className="text-sm text-yellow-300">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </RevealFromRight>
        </div>
      </div>
    </section>
  );
};