import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-3 shadow-lg font-playfair relative z-50">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center">
                {/* Top Row: Logo + Name + Hamburger */}
                <div className="flex justify-between items-center w-full sm:w-auto">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <img
                            src="/assets/logo.jpg"
                            alt="College Logo"
                            className="h-10 w-10 sm:h-16 sm:w-16 rounded-full object-contain shadow-md border border-gray-200"
                        />
                        <div className="leading-snug">
                            <h1 className="text-base sm:text-xl font-bold">
                                Veer Bahadur Singh B.Ed College
                            </h1>
                            {/* Add spacing between English and Hindi name */}
                            <div className="h-1" /> {/* small vertical space */}
                            <h2 className="text-sm text-yellow-200 font-semibold">
    वीर बहादुर सिंह बी.एड. कालेज हरनहीं (महु‌‌राॅव)  गोरखपुर
</h2>
                            <p className="text-xs sm:text-sm text-white italic">
                                Affiliated by Deen Dayal Upadhyaya Gorakhpur University
                            </p>
                        </div>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="sm:hidden text-white"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex gap-4 mt-3 sm:mt-0 text-base font-semibold">
                    {navLinks.map(({ name, to, external }, i) => (
                        <li key={i}>
                            {external ? (
                                <a
                                    href={to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
                                >
                                    {name}
                                </a>
                            ) : (
                                <Link
                                    to={to}
                                    className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
                                >
                                    {name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-purple-900 rounded-md mt-2`}
            >
                <ul className="flex flex-col gap-3 py-4 px-4 text-sm font-semibold">
                    {navLinks.map(({ name, to, external }, i) => (
                        <li key={i}>
                            {external ? (
                                <a
                                    href={to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
                                >
                                    {name}
                                </a>
                            ) : (
                                <Link
                                    to={to}
                                    onClick={toggleMenu}
                                    className="block hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
                                >
                                    {name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

const navLinks = [
    { name: "HOME", to: "/" },
    { name: "FACULTY", to: "/faculty" },
    { name: "EXAM", to: "/exam" },
    { name: "NOTICE", to: "/notice" },
    { name: "COURSES", to: "/courses" },
    { name: "RECOGNITION", to: "/recognition" },
    { name: "CAREER/JOBS", to: "/career" },
    { name: "CONTACT US", to: "/contact" },
];

export default Navbar;
