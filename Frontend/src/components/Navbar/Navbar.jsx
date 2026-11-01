import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../Common/Container";
import PrimaryButton from "../Buttons/PrimaryButton";
import MobileMenu from "./MobileMenu";

{/* for making active link highlighted*/}import { Link } from "react-scroll";
const navLinks = [
  "Home",
  
  "Analyze",
  "Stories",
  "Feedback",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-200 shadow-sm">
      <Container className="flex h-20 items-center justify-between">

        {/*Logo*/}

        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Path<span className="text-orange-500">2</span>Hire
          </h1>
        </div>

        {/* Desktop Menu */}

        <nav className="hidden cursor-pointer lg:flex items-center gap-9 px-10">

          {navLinks.map((item) => (
            <Link
             
              key={item}
              to={`${item.toLowerCase()}`}
              smooth={false}
              //duration={300}
              offset={-80}  //bcz navbar is fixed 
              spy={true}
              activeClass="active"
              className="relative text-[17px] font-medium text-white transition-all duration-300 hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}

        </nav>
        {/* Button */}

        <div className="hidden lg:block">
          <PrimaryButton>
            Get Started
          </PrimaryButton>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-400"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </Container>

      <MobileMenu  isOpen={isOpen}  setIsOpen={setIsOpen}/>

    </header>
  );
};

export default Navbar;