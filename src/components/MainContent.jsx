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

            {/* Navigation - Fixed Bottom at all times on mobile, Sticky on Desktop */}
            <div className="
                fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-10
                lg:sticky lg:bottom-0 lg:mt-8 lg:pt-6 lg:pb-2 
                bg-gradient-to-t from-black via-black/90 to-transparent 
                backdrop-blur-xl lg:backdrop-blur-md 
                -mx-0 lg:-mx-12 lg:px-12 lg:rounded-b-[3rem]
            ">
                <nav className="relative flex justify-center lg:justify-end max-w-7xl mx-auto">
                    <ul className="flex items-center gap-6 sm:gap-8 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-2xl shadow-2xl lg:bg-transparent lg:border-none lg:backdrop-blur-none lg:shadow-none lg:p-0">
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300
                                        ${activeTab === tab.id ? 'text-gold-400 scale-110' : 'text-gray-500 hover:text-white'}
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
