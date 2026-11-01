import React from "react";
const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const navLinks = [
    { title: "Home", id: "home" },
    { title: "Analyze Now", id: "analyze now" },
    { title: "Stories", id: "stories" },
    { title: "About", id: "about" },
    { title: "Feedback", id: "feedback" },
  ];
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="absolute left-4 right-4 top-20 rounded-2xl border border-white/10 bg-black p-6 shadow-xl md:hidden">
      <ul className="space-y-5">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id.toLowerCase()}`}
              onClick={handleClick}
              className="block text-slate-400 hover:text-white transition"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default MobileMenu;