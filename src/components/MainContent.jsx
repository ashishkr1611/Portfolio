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

            {/* Navigation - Bottom Positioned */}
            <div className="flex justify-center md:justify-end mt-12 relative z-20">
                <nav className="relative">
                    <ul className="flex flex-wrap gap-2 bg-black/40 p-2 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl">
                        {tabs.map((tab) => (
                            <li key={tab.id} className="relative">
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        relative z-10 px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300
                                        ${activeTab === tab.id ? 'text-black' : 'text-gray-400 hover:text-white'}
                                    `}
                                >
                                    {tab.label}
                                </button>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-gold-400 rounded-xl shadow-[0_0_25px_rgba(250,204,21,0.4)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </main>
    );
};

export default MainContent;
