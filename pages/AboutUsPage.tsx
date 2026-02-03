import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Hospital Story Section
const HospitalStory: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight">
                        Hospital<br />Story
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
                        Founded with a vision to provide exceptional dermatological care, Olirvu has grown into a leading aesthetic dermatology clinic. Our journey began with a commitment to combining advanced medical expertise with personalized patient care.
                    </p>
                    <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
                        Over the years, we have built a reputation for excellence, treating thousands of patients with cutting-edge technology and compassionate service. Our team of specialists continues to push the boundaries of aesthetic medicine.
                    </p>
                </div>

                {/* Right Images - Two side by side */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg h-[280px] md:h-[320px]">
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                            alt="Modern hospital building"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg h-[280px] md:h-[320px] bg-white flex items-center justify-center border border-gray-100">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg viewBox="0 0 24 24" fill="white" className="w-16 h-16 md:w-20 md:h-20">
                                <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Vision & Mission Section
const VisionMission: React.FC = () => {
    return (
        <section className="w-full bg-[#FFFEF6] py-8 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Vision Card */}
                <div className="bg-primary rounded-2xl p-8 md:p-10 text-white shadow-xl">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4">Vision</h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        To be the leading destination for aesthetic dermatology, where innovation meets compassion, delivering transformative results that enhance confidence and well-being for every patient.
                    </p>
                </div>

                {/* Mission Card */}
                <div className="bg-primary rounded-2xl p-8 md:p-10 text-white shadow-xl">
                    <h3 className="text-2xl md:text-3xl font-serif mb-4">Mission</h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        To provide exceptional, personalized dermatological care using state-of-the-art technology and evidence-based treatments, while maintaining the highest standards of medical ethics and patient satisfaction.
                    </p>
                </div>
            </div>
        </section>
    );
};

// Our Expertise Section with Stats
const Expertise: React.FC = () => {
    const stats = [
        { label: 'Years Of Experience', value: '00' },
        { label: 'Number Of Patients Treated', value: '00' },
        { label: 'Our Specializations', value: '00' },
    ];

    return (
        <section className="w-full bg-white py-16 md:py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-900 mb-16">
                    Our Expertise
                </h2>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <p className="text-gray-500 text-sm md:text-base font-light">{stat.label}</p>
                            <p className="text-5xl md:text-6xl font-serif text-gray-900">
                                {stat.value}<span className="text-primary">+</span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Doctor Image - Large on Left */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
                            alt="Doctor in scrubs with stethoscope"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hidden lg:block"></div>
                </div>
            </div>
        </section>
    );
};

// Doctors & Team Section
const DoctorsTeam: React.FC = () => {
    return (
        <section className="w-full bg-[#FFFEF6] py-16 md:py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Title aligned right */}
                <div className="flex justify-end mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight text-right">
                        Doctors & Team
                    </h2>
                </div>

                {/* Images Grid - Two images side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                            alt="Medical procedure"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                            alt="Woman face closeup"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

// Infrastructure & Technology Section
const Infrastructure: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
                            Infrastructure<br />& Technology
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
                            Our state-of-the-art facility is equipped with the latest dermatological technology, ensuring precise diagnoses and effective treatments. From advanced laser systems to cutting-edge imaging equipment, we invest in the best tools to deliver exceptional care.
                        </p>
                        <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
                            Every treatment room is designed with patient comfort in mind, combining clinical excellence with a serene, welcoming atmosphere.
                        </p>
                    </div>

                    {/* Right Images - Two side by side */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[250px] md:h-[300px]">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                                alt="Medical equipment"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[250px] md:h-[300px]">
                            <img
                                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop"
                                alt="Woman with clear skin"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Main About Us Page
const AboutUsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FFFEF6]">
            <Navbar />
            <main className="flex flex-col">
                <HospitalStory />
                <VisionMission />
                <Expertise />
                <DoctorsTeam />
                <Infrastructure />
            </main>
            <Footer />
        </div>
    );
};

export default AboutUsPage;
