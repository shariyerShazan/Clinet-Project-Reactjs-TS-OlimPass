import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { HiMenu , HiX} from "react-icons/hi";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Partners", to: "/partners" },
  { label: "Register", to: "/register" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
    const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive } : {isActive : boolean}) =>
    `lg:text-xl xl:text-2xl transition hover:text-[#F80B58] ${
      isActive ? "text-[#F80B58]" : "text-white"
    } `;

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md py-3 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-3xl lg:text-4xl xl:text-[40px] text-white font-bold tracking-tight">
            OLIM PASS.
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Sign Up */}
          <div className="hidden md:block">
            <button onClick={()=>navigate("/register")} className="px-6 py-2 border-2 lg:text-xl xl:text-2xl text-white cursor-pointer border-white rounded-full hover:bg-white hover:text-black transition font-semibold">
              Sign Up
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition cursor-pointer"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block lg:text-xl xl:text-2xl py-2 hover:text-[#F80B58] transition ${
                     isActive ? "text-[#F80B58]" : "text-white"
                  } `
                }
              >
                {item.label}
              </NavLink>
            ))}

            <button onClick={()=>navigate("/register")} className="w-full px-6 py-2 border-2 lg:text-xl xl:text-2xl cursor-pointer text-white border-white rounded-full hover:bg-white hover:text-black transition font-semibold">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
