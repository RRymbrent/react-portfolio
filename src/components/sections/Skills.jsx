import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiMongodb,
  DiAngularSimple,
} from 'react-icons/di';
import { SiTypescript} from 'react-icons/si';

export const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', icon: <DiHtml5 className="w-full h-full" /> },
    { name: 'CSS', icon: <DiCss3 className="w-full h-full" /> },
    { name: 'JavaScript', icon: <DiJavascript1 className="w-full h-full" /> },
    { name: 'React', icon: <DiReact className="w-full h-full" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-full h-full" /> },
    { name: 'Angular', icon: <DiAngularSimple className="w-full h-full" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <DiNodejs className="w-full h-full" /> },
    { name: 'MongoDB', icon: <DiMongodb className="w-full h-full" /> },
    { name: 'Git', icon: <DiGit className="w-full h-full" /> },
  ];

  const [isPausedFrontend, setIsPausedFrontend] = useState(false);
  const [isPausedBackend, setIsPausedBackend] = useState(false);
  
  const frontendContainerRef = useRef(null);
  const frontendSliderRef = useRef(null);
  const backendContainerRef = useRef(null);
  const backendSliderRef = useRef(null);
  
  const frontendRequestRef = useRef(null);
  const backendRequestRef = useRef(null);
  
  const frontendPositionRef = useRef(0);
  const backendPositionRef = useRef(0);
  
  const speed = 0.5;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const animateFrontend = () => {
    if (!isPausedFrontend && isInView) {
      frontendPositionRef.current -= speed;
      
      const containerWidth = frontendContainerRef.current?.offsetWidth || 0;
      const sliderWidth = frontendSliderRef.current?.scrollWidth || 0;
      
      if (-frontendPositionRef.current >= sliderWidth / 2) {
        frontendPositionRef.current = 0;
      }
      
      if (frontendSliderRef.current) {
        frontendSliderRef.current.style.transform = `translateX(${frontendPositionRef.current}px)`;
      }
    }
    
    frontendRequestRef.current = requestAnimationFrame(animateFrontend);
  };

  const animateBackend = () => {
    if (!isPausedBackend && isInView) {
      backendPositionRef.current -= speed;
      
      const containerWidth = backendContainerRef.current?.offsetWidth || 0;
      const sliderWidth = backendSliderRef.current?.scrollWidth || 0;
      
      if (-backendPositionRef.current >= sliderWidth / 2) {
        backendPositionRef.current = 0;
      }
      
      if (backendSliderRef.current) {
        backendSliderRef.current.style.transform = `translateX(${backendPositionRef.current}px)`;
      }
    }
    
    backendRequestRef.current = requestAnimationFrame(animateBackend);
  };

  useEffect(() => {
    frontendRequestRef.current = requestAnimationFrame(animateFrontend);
    backendRequestRef.current = requestAnimationFrame(animateBackend);
    return () => {
      cancelAnimationFrame(frontendRequestRef.current);
      cancelAnimationFrame(backendRequestRef.current);
    };
  }, [isPausedFrontend, isPausedBackend, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="skills" 
      className="min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden relative bg-transparent"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div className="text-center z-10" variants={itemVariants}>
          <h2 className="text-7xl font-bold mb-16 text-white">Skills
          <div className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mt-4 mx-auto w-50 rounded-full transition-all duration-700" />

          </h2>
        </motion.div>
        
        {/* Frontend Skills Slider */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Frontend</h3>
          <motion.div 
            className="relative w-full h-40 overflow-hidden"
            onMouseEnter={() => setIsPausedFrontend(true)}
            onMouseLeave={() => setIsPausedFrontend(false)}
            ref={frontendContainerRef}
          >
            <div className="absolute left-0 top-0 h-full w-32 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
            
            <div 
              className="absolute flex items-center h-full gap-8 px-4"
              ref={frontendSliderRef}
            >
              {[...frontendSkills, ...frontendSkills].map((skill, index) => (
                <motion.div 
                  key={`frontend-${skill.name}-${index}`}
                  className="flex items-center gap-4 bg-black rounded-lg p-4 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 text-yellow-300 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <span className="text-xl font-medium text-white whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Backend Skills Slider */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Backend</h3>
          <motion.div 
            className="relative w-full h-40 overflow-hidden"
            onMouseEnter={() => setIsPausedBackend(true)}
            onMouseLeave={() => setIsPausedBackend(false)}
            ref={backendContainerRef}
          >
            <div className="absolute left-0 top-0 h-full w-32 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
            
            <div 
              className="absolute flex items-center h-full gap-8 px-4"
              ref={backendSliderRef}
            >
              {[...backendSkills, ...backendSkills].map((skill, index) => (
                <motion.div 
                  key={`backend-${skill.name}-${index}`}
                  className="flex items-center gap-4 bg-black rounded-lg p-4 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 text-yellow-300 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <span className="text-xl font-medium text-white whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  ); 
};