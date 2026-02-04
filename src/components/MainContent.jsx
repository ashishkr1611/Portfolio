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
        { id: 'projects', label: 'Project' },
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
        <main className="glass-panel rounded-[3rem] p-8 lg:p-12 min-h-[700px] relative flex flex-col">
            {/* Animated Decoration */}
            <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Content Area - Grows to fill space */}
            <div className="relative z-10 flex-1">
                <AnimatePresence mode="wait">
                    {renderContent()}
                </AnimatePresence>
            </div>

            {/* Navigation - Fixed/Sticky Bottom Positioned */}
            <div className="sticky bottom-0 left-0 right-0 mt-8 pt-6 pb-2 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-md z-20 -mx-8 lg:-mx-12 px-8 lg:px-12 rounded-b-[3rem]">
                <nav className="relative flex justify-center md:justify-end">
                    <ul className="flex items-center gap-8 px-4 py-2">
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        text-sm font-semibold tracking-wide transition-all duration-300
                                        ${activeTab === tab.id ? 'text-gold-400' : 'text-gray-400 hover:text-white'}
                                    `}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </main>
    );
};

export default MainContent;
