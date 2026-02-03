import React, { useRef } from 'react';
import { Plus } from 'lucide-react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ValueItem, ServiceItem, TestimonialItem } from '../types';

// --- Internal Components ---

const Hero: React.FC = () => {
    return (
        <section className="w-full py-4 flex justify-center items-center">
            <div className="w-full max-w-[95%] md:h-[calc(100vh-100px)] min-h-[600px] bg-white rounded-[3rem] overflow-hidden shadow-sm flex flex-col md:flex-row">
                {/* Left Content */}
                <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center space-y-4">
                    <p className="text-gray-500 text-sm md:text-lg font-light tracking-wide">
                        Advanced Dermatology for Healthy
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#333333] font-normal leading-tight -ml-1">
                        Confident Skin
                    </h1>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md pt-2">
                        Comprehensive skin, hair, and aesthetic treatments delivered with medical precision and personalised care.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-6">
                        <button className="bg-[#7A557B] hover:bg-[#5D2E5E] text-white px-8 py-3 text-sm font-medium transition-all duration-300">
                            Book Appointment
                        </button>
                        <button className="bg-[#7A557B] hover:bg-[#5D2E5E] text-white px-8 py-3 text-sm font-medium transition-all duration-300">
                            Call Now
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="h-full aspect-square relative bg-gray-100 hidden md:block">
                    <img
                        src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                        alt="Woman face looking up with clear skin"
                        className="w-full h-full object-cover grayscale brightness-90 contrast-125"
                    />
                </div>
                {/* Mobile Image (not square confined) */}
                <div className="w-full h-[400px] relative bg-gray-100 md:hidden">
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

const Paragraph: React.FC<{ value: string }> = ({ value }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    });

    const words = value.split(" ");

    return (
        <p ref={element} className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed flex flex-wrap justify-center gap-[0.25em]">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
            })}
        </p>
    )
}

const Word: React.FC<{ children: string; range: [number, number]; progress: MotionValue<number> }> = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <motion.span style={{ opacity }} className="text-[#333333]">
            {children}
        </motion.span>
    )
}

const Introduction: React.FC = () => {
    const text = "Our clinic offers evidence-based dermatology backed by advanced diagnostic tools and modern treatment technologies. We focus on delivering safe, ethical, and effective care tailored to each individual's needs.";

    return (
        <section className="w-full py-20 px-6 min-h-[50vh] flex items-center">
            <div className="max-w-4xl mx-auto text-center">
                <Paragraph value={text} />
            </div>
        </section>
    );
};

const values: ValueItem[] = [
    { title: 'Dermatologist with extensive clinical experience', description: 'Our lead dermatologist has over 15 years of experience in treating complex skin conditions with a proven track record of successful outcomes.' },
    { title: 'US-FDA approved treatment technologies', description: 'We use only top-tier, clinically tested, and US-FDA approved equipment to ensure the highest safety and efficacy standards for our patients.' },
    { title: 'Transparent, personalised treatment plans', description: 'We believe in honesty. Every treatment plan is customised to your specific skin type and concerns, with full transparency on costs and expected results.' },
    { title: 'Hygienic, patient-friendly clinical environment', description: 'Our clinic adheres to strict sterilization protocols to provide a safe, clean, and comfortable environment for all procedures.' },
    { title: 'Trusted by hundreds of patients for skin', description: 'Countless satisfied patients have trusted us with their skin health. Read our testimonials to see the difference we make.' },
];

const Values: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full flex justify-center items-center py-4">
            <div className="w-full max-w-[95%] mx-auto bg-primary rounded-[3rem] text-white overflow-hidden py-8 px-6 md:px-16 md:h-[calc(90vh-100px)] min-h-[600px] flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full h-full">

                    {/* Image Side */}
                    <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden hidden lg:block">
                        <img
                            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop"
                            alt="Close up aesthetic shot"
                            className="w-full h-full object-cover grayscale opacity-90"
                        />
                    </div>
                    {/* Mobile Image */}
                    <div className="relative h-[300px] rounded-3xl overflow-hidden lg:hidden">
                        <img
                            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887&auto=format&fit=crop"
                            alt="Close up aesthetic shot"
                            className="w-full h-full object-cover grayscale opacity-90"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="space-y-4 lg:space-y-8 h-full flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-serif mb-4 lg:mb-8">What We Stand For:</h2>

                        <div className="divide-y divide-white/20">
                            {values.map((item, idx) => (
                                <div key={idx} className="group">
                                    <button
                                        onClick={() => toggleAccordion(idx)}
                                        className="w-full py-5 flex justify-between items-center cursor-pointer hover:bg-white/5 px-2 rounded-lg transition-colors text-left focus:outline-none"
                                    >
                                        <span className="text-base md:text-xl font-light tracking-wide">{item.title}</span>
                                        <motion.div
                                            animate={{ rotate: openIndex === idx ? 45 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Plus className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                                        </motion.div>
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-4 pb-5 text-white/70 text-sm md:text-base font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
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
        title: 'Laser Therapy',
        description: 'Advanced laser treatments for hair removal, skin resurfacing, tattoo removal, and scar reduction using state-of-the-art technology.',
        imageUrl: 'https://images.unsplash.com/photo-1609188076635-e6eca27b9589?q=80&w=2071&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Anti-Aging',
        description: 'Botox, fillers, thread lifts, and non-surgical facelifts to restore youthfulness and reduce fine lines and wrinkles.',
        imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1978&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'Medi-Facials',
        description: 'Customized medical-grade facials for deep cleansing, hydration, and glow, targeting specific skin concerns.',
        imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 6,
        title: 'Pediatric Dermatology',
        description: 'Specialized skin care for infants, children, and adolescents, treating eczema, birthmarks, and other pediatric skin conditions.',
        imageUrl: 'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=2073&auto=format&fit=crop'
    },
    {
        id: 7,
        title: 'Chemical Peels',
        description: 'Exfoliating treatments to improve skin texture, tone, and clarity, effective for acne scarring and sun damage.',
        imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        id: 8,
        title: 'Bridal Dermatology',
        description: 'Comprehensive pre-wedding skin and hair care packages to ensure you look your absolute radiant best on your big day.',
        imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop'
    },
];

const CoreServices: React.FC = () => {
    const [emblaRef] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        containScroll: 'trimSnaps'
    }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

    return (
        <section id="services" className="w-full py-10 overflow-hidden h-[100vh] flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8">
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Core Services</h2>
                <p className="text-gray-500 max-w-lg text-sm">
                    We provide a full spectrum of dermatology and cosmetology treatments designed to restore, enhance, and protect your skin
                </p>
            </div>

            <div className="embla" ref={emblaRef}>
                <div className="flex touch-pan-y gap-6 px-6 md:px-12 lg:px-20">
                    {services.map((service) => (
                        <div key={service.id} className="flex-[0_0_80%] md:flex-[0_0_35%] lg:flex-[0_0_22%] min-w-0">
                            <div className="group relative h-[550px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg mx-2">
                                <img
                                    src={service.imageUrl}
                                    alt={service.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-white text-3xl font-bold leading-tight mb-3">
                                        {service.title.split(' ')[0]} <br /> {service.title.split(' ')[1]}
                                    </h3>
                                    <p className="text-gray-300 text-xs leading-relaxed line-clamp-4 opacity-90 font-light tracking-wide">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 text-center">
                <button className="bg-[#8E5A8F] hover:bg-primary text-white px-10 py-3 rounded-none text-sm font-medium transition-colors duration-300">
                    View More
                </button>
            </div>
        </section>
    );
};

const DoctorProfile: React.FC = () => {
    return (
        <section className="w-full py-4 flex justify-center items-center">
            <div className="w-full max-w-[95%] bg-white rounded-[3rem] overflow-hidden shadow-sm flex flex-col lg:flex-row items-center md:h-[calc(90vh-100px)] min-h-[600px]">
                {/* Image */}
                <div className="w-full lg:w-1/2 h-full relative">
                    <img
                        src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
                        alt="Doctor with stethoscope"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 p-10 lg:p-20 space-y-6 flex flex-col justify-center h-full">
                    <span className="text-gray-400 text-sm tracking-widest uppercase">Dr.</span>
                    <h2 className="text-6xl font-serif text-gray-900 mb-2">Revathi</h2>
                    <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
                        <p>
                            Dr. Revathi is a distinguished dermatologist with over 15 years of clinical excellence. Specialized in aesthetic and restorative dermatology, she combines medical precision with an artistic eye to deliver natural, transformative results.
                        </p>
                        <p>
                            A fellow of the American Academy of Dermatology, she is dedicated to evidence-based treatments and continuous innovation in skin care protocols, ensuring every patient receives the highest standard of personalized care.
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
