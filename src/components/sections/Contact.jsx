import emailjs from 'emailjs-com'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import daisy from '../../images/daisy.png';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    // Remove triggerOnce to make it work on both scroll directions
    const [ref, inView] = useInView({
        threshold: 0.2,
        // Add this to trigger animation every time element comes into view
        triggerOnce: false,
    });

    const SERVICE_ID = "service_hnspn98"
    const TEMPLATE_ID = "template_0laejs8"
    const PUBLIC_KEY = "twsVl_0qkNvURDzh-"
    
    const handleSubmit = (e) => {
        e.preventDefault()
 
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            setFormData({name: "", email: "", message: "",});
        }).catch(() => alert("Oops! Something went wrong. Please try again"))
    }

    // Animation variants - modified for bidirectional scrolling
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
        // Add exit animation for when scrolling up
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        // Add exit animation for items
        exit: {
            opacity: 0,
            y: 20,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    const underlineAnimation = {
        hidden: { width: 0 },
        visible: {
            width: "10%",
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        },
        exit: {
            width: 0,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
        {/* Centered Heading */}
        <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "exit"}
            variants={containerVariants}
            className="w-full text-center mb-12"
        >
            <motion.h2 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r"
                variants={itemVariants}
            >
                Get In <span className='text-yellow-300'>Touch</span>
                <motion.div 
                    className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto w-10 rounded-full transition-all duration-700"
                    variants={underlineAnimation}
                />
            </motion.h2>
        </motion.div>
    
        {/* Content Container - Image and Form Side by Side */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
            {/* Left Side - Image */}
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "exit"}
                variants={containerVariants}
                className="w-full md:w-1/2 flex flex-col items-center"
            >
                <motion.div variants={itemVariants} className="mb-8">
                    <img 
                        src= {daisy} // Replace with your image path
                        alt="Contact illustration"
                        className="w-70 max-w-md rounded-lg shadow-lg"
                    />
                </motion.div>
                
                {/* Social Media Buttons */}
                <motion.div 
                    className="flex gap-6"
                    variants={itemVariants}
                >
                    <a 
                        href="https://www.linkedin.com/in/rymbrent-rabano/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black hover:border text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-yellow-300 hover:border-yellow-300 hover:text-black"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-6 h-6 text-white hover:text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                    
                    <a 
                        href="https://www.instagram.com/oksiisca/?hl=en" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-black hover:border text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-yellow-300 hover:border-yellow-300 hover:text-black"
                        aria-label="Instagram"
                    >
                        <svg className="w-6 h-6 text-white hover:text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    
                    <a 
                        href="mailto:dev.rymbrentrabano@gmail.com" 
                        className="bg-black hover:border text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:bg-yellow-300 hover:border-yellow-300 hover:text-black"
                        aria-label="Email"
                    >
                        <svg className="w-6 h-6 text-white hover:text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                        </svg>
                    </a>
                </motion.div>
            </motion.div>
    
            {/* Right Side - Form */}
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "exit"}
                variants={containerVariants}
                className="w-full md:w-1/2"
            >
                <motion.form 
                    action="" 
                    className="space-y-6" 
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                >
                    <motion.div className="relative" variants={itemVariants}>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name} 
                            className="w-full bg-white/10 border-2 border-white/100 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-300"
                            placeholder="Name:"
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </motion.div>
    
                    <motion.div className="relative" variants={itemVariants}>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            value={formData.email} 
                            className="w-full bg-white/10 border-2 border-white/100 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-300"
                            placeholder="example@gmail.com"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </motion.div>
    
                    <motion.div className="relative" variants={itemVariants}>
                        <textarea 
                            name="message" 
                            id="message" 
                            required 
                            rows={5} 
                            value={formData.message} 
                            className="w-full bg-white/10 border-2 border-white/100 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-300"
                            placeholder="Your Message..."
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                    </motion.div>
    
                    <motion.button 
                        type="submit" 
                        className="w-full bg-transparent text-white py-3 px-6 rounded-4xl border-1 font-medium transition relative overflow-hidden hover:text-yellow-300 cursor-pointer hover:bg-white/10"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    </section>
    );
};