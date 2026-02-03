import React from 'react';
import { Plus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ValueItem, ServiceItem, TestimonialItem } from '../types';

// --- Internal Components ---

const Hero: React.FC = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6 md:pr-10">
                    <p className="text-gray-500 text-sm md:text-base font-light">
                        Advanced Dermatology for Healthy
                    </p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight">
                        Confident <span className="text-gray-900">Skin</span>
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
                        Comprehensive skin, hair, and aesthetic treatments delivered with medical precision and personalised care.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-primary hover:bg-[#4a244b] text-white px-8 py-3.5 text-sm font-medium transition-all duration-300 shadow-md">
                            Book Appointment
                        </button>
                        <button className="bg-primary hover:bg-[#4a244b] text-white px-8 py-3.5 text-sm font-medium transition-all duration-300 shadow-md">
                            Call Now
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                        alt="Woman face looking up with clear skin"
                        className="w-full h-full object-cover grayscale brightness-90 contrast-125"
                    />
                </div>
            </div>
        </section>
    );
};

const Introduction: React.FC = () => {
    return (
        <section className="w-full py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 leading-relaxed">
                    Our clinic offers <span className="text-gray-400">evidence-based dermatology</span> backed
                    by <span className="text-gray-400">advanced diagnostic tools</span> and <span className="text-gray-400">modern treatment technologies.</span> We focus on delivering <span className="text-gray-400">safe, ethical, and effective care</span> tailored to each individual's needs.
                </p>
            </div>
        </section>
    );
};

const values: ValueItem[] = [
    { title: 'Dermatologist with extensive clinical experience' },
    { title: 'US-FDA approved treatment technologies' },
    { title: 'Transparent, personalised treatment plans' },
    { title: 'Hygienic, patient-friendly clinical environment' },
    { title: 'Trusted by hundreds of patients for skin' },
];

const Values: React.FC = () => {
    return (
        <section className="w-full max-w-[95%] mx-auto bg-primary rounded-[3rem] text-white overflow-hidden py-16 px-6 md:px-16 my-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Image Side */}
                <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop"
                        alt="Close up aesthetic shot"
                        className="w-full h-full object-cover grayscale opacity-90"
                    />
                </div>

                {/* Content Side */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif mb-8">What We Stand For:</h2>

                    <div className="divide-y divide-white/20">
                        {values.map((item, idx) => (
                            <div key={idx} className="py-5 flex justify-between items-center group cursor-pointer hover:bg-white/5 px-2 rounded-lg transition-colors">
                                <span className="text-sm md:text-base font-light tracking-wide">{item.title}</span>
                                <Plus className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const services: ServiceItem[] = [
    {
        id: 1,
        title: 'Skin Treatments',
        description: 'Acne & Acne Scars, Pigmentation, Melasma, Dark Spots, Open Pores, Anti-Aging Solutions, Skin Rejuvenation, Dermatitis, Psoriasis.',
        imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2073&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Hair Treatments',
        description: 'Hair Fall Control, PRP Therapy, Dandruff, Alopecia, Scalp Disorders, Hair Strengthening Protocols.',
        imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Skin Treatments',
        description: 'Acne & Acne Scars, Pigmentation, Melasma, Dark Spots, Open Pores, Anti-Aging Solutions, Skin Rejuvenation, Dermatitis, Psoriasis.',
        imageUrl: 'https://images.unsplash.com/photo-1609188076635-e6eca27b9589?q=80&w=2071&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Hair Treatments',
        description: 'Hair Fall Control, PRP Therapy, Dandruff, Alopecia, Scalp Disorders, Hair Strengthening Protocols.',
        imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1978&auto=format&fit=crop'
    },
];

const CoreServices: React.FC = () => {
    return (
        <section id="services" className="w-full py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Core Services</h2>
                    <p className="text-gray-500 max-w-lg text-sm">
                        We provide a full spectrum of dermatology and cosmetology treatments designed to restore, enhance, and protect your skin
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => (
                        <div key={service.id} className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-lg">
                            <img
                                src={service.imageUrl}
                                alt={service.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out scale-100 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                                <h3 className="text-white text-2xl font-bold leading-tight mb-2">
                                    {service.title.split(' ')[0]} <br /> {service.title.split(' ')[1]}
                                </h3>
                                <p className="text-gray-300 text-xs leading-relaxed line-clamp-6">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#8E5A8F] hover:bg-primary text-white px-10 py-3 rounded-none text-sm font-medium transition-colors duration-300">
                        View More
                    </button>
                </div>
            </div>
        </section>
    );
};

const DoctorProfile: React.FC = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col lg:flex-row gap-16 items-center">
                {/* Image */}
                <div className="w-full lg:w-1/2">
                    <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] bg-blue-50">
                        <img
                            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
                            alt="Doctor with stethoscope"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                    <span className="text-gray-400 text-sm tracking-widest uppercase">Dr.</span>
                    <h2 className="text-6xl font-serif text-gray-900 mb-6">Revathi</h2>
                    <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const testimonials: TestimonialItem[] = [
    {
        id: 1,
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 2,
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        id: 3,
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center mb-12">
                <h2 className="text-5xl font-serif text-gray-900">Testimonials</h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((item) => (
                    <div key={item.id} className="bg-primary text-white p-10 h-[350px] flex flex-col justify-center">
                        <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                        <p className="text-gray-300 text-sm leading-loose font-light">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <button className="bg-[#5D2E5E] text-white border border-transparent px-10 py-3 text-sm font-medium hover:bg-white hover:text-[#5D2E5E] hover:border-[#5D2E5E] transition-all duration-300">
                    View More
                </button>
            </div>
        </section>
    );
};

// --- Main Page Component ---

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FFFEF6]">
            <Navbar />
            <main className="flex flex-col">
                <Hero />
                <Introduction />
                <Values />
                <CoreServices />
                <DoctorProfile />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
