import { useState, useEffect } from "react";

export default function Navbar({ setShowResume }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
    }, [dark]);

    const handleNavClick = (item, e) => {
        if (item === "Resume") {
            e.preventDefault();
            setShowResume(true);
            setMenuOpen(false);
        } else {
            setMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur 
                    text-white z-50">
            <div className="container-custom flex justify-between items-center h-16">
                <h1 className="font-bold text-xl text-blue-500">Pavan M G</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {["About", "Skills", "Projects", "Certifications", "Education", "Achievements", "Resume", "Contact"].map(item => (
                        <li key={item}>
                            <a
                                href={item === "Resume" ? "#" : `#${item.toLowerCase()}`}
                                onClick={(e) => item === "Resume" ? handleNavClick(item, e) : null}
                                className="hover:text-blue-400 cursor-pointer"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    <button onClick={() => setDark(!dark)} className="ml-4">
                        {dark ? "☀️" : "🌙"}
                    </button>
                </ul>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black border-t border-slate-800">
                    <ul className="flex flex-col text-center py-6 gap-6">
                        {["About", "Skills", "Projects", "Certifications", "Education", "Achievements", "Resume", "Contact"].map(item => (
                            <li key={item}>
                                <a
                                    href={item === "Resume" ? "#" : `#${item.toLowerCase()}`}
                                    onClick={(e) => handleNavClick(item, e)}
                                    className="block hover:text-blue-400 cursor-pointer"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
