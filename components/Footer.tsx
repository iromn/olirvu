import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FFFEF6] pt-20 pb-16 px-6 md:px-12 lg:px-20 mt-12 text-[#5D2E5E]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
         {/* Center Logo */}
         <div className="flex flex-col items-center justify-center mb-16">
             <div className="relative w-12 h-12 mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-[#5D2E5E] fill-current">
                   <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-5.4-5.4 5.389 5.389 0 0 1 2.26-4.4C12.92 3.04 12.46 3 12 3z"/>
                </svg>
             </div>
             <h3 className="text-4xl font-serif text-[#5D2E5E]">Olirvu</h3>
             <p className="text-[0.6rem] tracking-[0.2em] font-light text-[#5D2E5E] uppercase mt-1">Aesthetic Dermatology</p>
        </div>

        {/* Main Content Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_auto_2fr_auto_2fr] gap-10 md:gap-0 items-stretch">
            
            {/* Column 1: Navigation */}
            <div className="flex flex-col space-y-6 md:pr-10 text-center md:text-left pt-2">
               <a href="#" className="hover:opacity-70 transition-opacity uppercase text-sm font-light tracking-widest">Home</a>
               <a href="#about" className="hover:opacity-70 transition-opacity uppercase text-sm font-light tracking-widest">About Us</a>
               <a href="#projects" className="hover:opacity-70 transition-opacity uppercase text-sm font-light tracking-widest">Projects</a>
               <a href="#contact" className="hover:opacity-70 transition-opacity uppercase text-sm font-light tracking-widest">Contact Us</a>
            </div>

            {/* Divider 1 */}
            <div className="hidden md:block w-px bg-[#5D2E5E]/40 mx-10"></div>

            {/* Column 2: Contact Info */}
            <div className="flex flex-col space-y-6 text-center md:text-left">
                <div>
                    <h4 className="text-xl font-light mb-1 font-serif">Address</h4>
                    <p className="text-sm leading-relaxed font-light opacity-90">
                        12, Vidyalaya Rd, Near Ramakrishna<br/>
                        Park, Seerangapalayam, Salem,<br/>
                        India 636007
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-light mb-1 font-serif">Email</h4>
                    <a href="mailto:xayinif942@naqulu.com" className="text-sm font-light hover:underline opacity-90">xayinif942@naqulu.com</a>
                </div>
                <div>
                    <h4 className="text-xl font-light mb-1 font-serif">Call</h4>
                    <a href="tel:+910000000000" className="text-sm font-light hover:underline opacity-90">+91 0000000000</a>
                </div>
            </div>

            {/* Divider 2 */}
            <div className="hidden md:block w-px bg-[#5D2E5E]/40 mx-10"></div>

            {/* Column 3: Social */}
            <div className="flex flex-col justify-center items-center md:items-start h-full pt-4 md:pt-0">
                <h4 className="text-3xl md:text-4xl font-bold font-serif mb-6 leading-tight text-center md:text-left">
                  Get In Touch With<br/>Olirvu
                </h4>
                <div className="flex space-x-3 mb-4">
                    <a href="#" className="p-2 border border-[#5D2E5E] rounded-full hover:bg-[#5D2E5E] hover:text-[#FFFEF6] transition-colors group">
                       <Facebook size={18} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="p-2 border border-[#5D2E5E] rounded-full hover:bg-[#5D2E5E] hover:text-[#FFFEF6] transition-colors group">
                       <Instagram size={18} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="p-2 border border-[#5D2E5E] rounded-full hover:bg-[#5D2E5E] hover:text-[#FFFEF6] transition-colors group">
                       <Youtube size={18} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="p-2 border border-[#5D2E5E] rounded-full hover:bg-[#5D2E5E] hover:text-[#FFFEF6] transition-colors group">
                       <Linkedin size={18} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="p-2 border border-[#5D2E5E] rounded-full hover:bg-[#5D2E5E] hover:text-[#FFFEF6] transition-colors group">
                       {/* Simulating X logo with custom path or just Twitter icon for now as Lucide X is close button */}
                       <Twitter size={18} strokeWidth={1.5} />
                    </a>
                </div>
                <p className="text-sm font-light opacity-80 mt-2">Our Social Networks</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;