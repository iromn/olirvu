import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/', isRoute: true },
  { label: 'About Us', href: '/about', isRoute: true },
  { label: 'Contact', href: '#contact' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 py-4 px-6 md:px-12 lg:px-20 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Recreated with CSS/SVG approximation */}
        <Link to="/" className="flex flex-col items-center justify-center">
          {/* Logo Icon */}
          <div className="relative w-8 h-8 mb-1">
            <div className="absolute inset-0 bg-primary rounded-full mask-moon" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', borderRadius: '50%' }}></div>
            {/* Simulated Moon Shape using CSS radial gradient or SVG would be better, using simple SVG here */}
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-primary fill-current">
              <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-5.4-5.4 5.389 5.389 0 0 1 2.26-4.4C12.92 3.04 12.46 3 12 3z" />
            </svg>
          </div>
          <div className="text-[0.6rem] tracking-[0.2em] font-light text-gray-500 uppercase">Aesthetic Dermatology</div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-base font-medium text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            )
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

