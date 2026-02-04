import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';

const MainContent = () => {
    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
        { id: 'about', label: 'About' },
        { id: 'resume', label: 'Resume' },
        { id: 'projects', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' },
    ];

    const getActiveContent = () => {
        switch (activeTab) {
            case 'about':
                return <About />;
            case 'resume':
                return <Resume />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
        }
    };

    const renderContent = () => {
        return (
            <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: "linear" }}
                className="w-full"
            >
                {getActiveContent()}
            </motion.div>
        );
    };

    return (
        <>
            {/* Main Glass Panel */}
            <main className="glass-panel rounded-[2.5rem] p-8 lg:p-12 min-h-[600px] relative">
                {/* Animated Top Decoration */}
                <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:justify-end md:mb-12">
                    <nav className="w-auto">
                        <ul className="flex gap-2 bg-black/40 p-1.5 rounded-2xl backdrop-blur-xl border border-white/5">
                            {tabs.map((tab) => (
                                <li key={tab.id} className="relative">
                                    <button
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`
                                            relative z-10 px-6 py-2 rounded-xl text-sm font-medium transition-colors duration-300
                                            ${activeTab === tab.id ? 'text-black' : 'text-gray-400 hover:text-white'}
                                        `}
                                    >
                                        {tab.label}
                                    </button>
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTabDesktop"
                                            className="absolute inset-0 bg-gold-400 rounded-xl shadow-[0_0_20px_rgba(250,204,21,0.3)]"
                                            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Content Area */}
                <div className="relative z-10">
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </div>
            </main>

            {/* Mobile Bottom Navigation - Fixed at viewport level */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-[100]">
                <ul className="
                    flex justify-around 
                    bg-[#1a1a1a]/95 p-4
                    backdrop-blur-xl 
                    border-t border-white/10
                    rounded-t-3xl
                ">
                    {tabs.map((tab) => (
                        <li key={tab.id} className="flex-1 text-center">
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    w-full py-2 text-[12px] font-semibold transition-colors duration-300 tracking-wide
                                    ${activeTab === tab.id ? 'text-gold-400' : 'text-gray-400'}
                                `}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default MainContent;
