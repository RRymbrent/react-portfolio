import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profilepic from '../../images/profile.jpg';

const RevealAnimation = ({ children, from = 'top', delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false, 
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: from === 'top' ? -20 : from === 'bottom' ? 20 : 0,
      x: from === 'left' ? -20 : from === 'right' ? 20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: from === 'top' ? -20 : from === 'bottom' ? 20 : 0,
      x: from === 'left' ? -20 : from === 'right' ? 20 : 0,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "exit"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const SkillItem = ({ children, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
    >
      {children}
    </motion.span>
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

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <RevealAnimation from="top">
          <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r text-center">
            About <span className='text-yellow-300'>Me</span>
            <motion.div 
              className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mt-0.5 mx-auto w-50 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: "15%" } : { width: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </h2>
        </RevealAnimation>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "exit"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 items-center"
        >
          <motion.div className="flex-1" variants={containerVariants}>
            <RevealAnimation from="top" delay={1}>
              <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:scale-105 transition-all">
                <p className="text-white mb-6 font-mono text-justify text-md">
                  I'm <span className='text-yellow-300'>Rymbrent Rabano</span>, a recent graduate based in <span className='text-yellow-300'>Madapdap, Mabalacat, Pampanga,</span> and a dedicated Full Stack Developer with a strong focus on frontend development and WordPress. 
                  I specialize in building clean, responsive, and user-centered interfaces that offer smooth and engaging experiences across devices. 
                  With a solid understanding of both <span className='text-yellow-300'>frontend</span> and <span className='text-yellow-300'>backend</span> technologies, I bring <span className='text-yellow-300'>flexibility</span> and <span className='text-yellow-300'>efficiency</span> to every project I work on.
                </p>
                <p className="text-white mb-6 font-mono text-justify">
                  I'm known for my <span className='text-yellow-300'>creativity</span>, <span className='text-yellow-300'>adaptability</span>, and being a <span className='text-yellow-300'>fast learner</span>. 
                  I'm always eager to take on new challenges, explore emerging technologies, and refine my skills through hands-on experience. 
                  Whether developing a solution from scratch or enhancing existing systems, I aim to deliver results that are not only functional but also visually impactful.
                </p>
              </div>            
            </RevealAnimation>
          </motion.div>

          <RevealAnimation from="right" delay={2}>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] overflow-hidden border border-transparent hover:border-yellow-300 hover:rounded-lg transition-all duration-300 group shadow-[0_4px_20px_rgba(234,179,8,0.1)] hover:shadow-[0_8px_30px_rgba(234,179,8,0.2)]">
                <motion.img 
                  src={profilepic} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-all duration-500"></div>
                <div className="absolute inset-0 border-8 border-transparent transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold">Rymbrent Rabano</h3>
                  <p className="text-sm text-yellow-300">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </motion.div>
      </div>
    </section>
  );
};