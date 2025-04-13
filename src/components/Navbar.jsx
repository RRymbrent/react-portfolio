import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`fixed top-0 w-full z-40 bg-black/80 backdrop-blur-sm transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white  transition-colors">
            Rymbrent<span className="text-yellow-300"> Rabano</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white text-2xl flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors hover:bg-white/50 rounded px-3 py-1"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors hover:bg-white/50 rounded px-3 py-1"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors hover:bg-white/50 rounded px-3 py-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors hover:bg-white/50 rounded px-3 py-1"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};