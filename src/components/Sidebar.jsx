import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Calendar, MapPin, Github, Linkedin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <aside className={`
        glass-panel rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center gap-6 lg:gap-0
        transition-[max-height,transform,opacity] duration-500
        ${isOpen ? 'max-h-[1000px]' : 'max-h-[140px] lg:max-h-full overflow-hidden'}
    `}>

            {/* Mobile Toggle */}
            <motion.button
                whileTap={{ scale: 0.95 }}
                className="lg:hidden absolute top-6 right-6 text-white/50 p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </motion.button>

            {/* Profile Section */}
            <div className="flex flex-row lg:flex-col items-center lg:items-center w-full gap-5 lg:gap-0">
                {/* Avatar Surround */}
                <div className="relative group lg:mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-20 h-20 lg:w-36 lg:h-36 rounded-2xl lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative z-10 group-hover:rotate-1 transition-transform duration-500"
                    >
                        <img
                            src="/my-avatar.png"
                            alt="Profile"
                            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Decorative Glows */}
                    <div className="absolute inset-0 bg-gold-400/20 blur-2xl lg:blur-3xl -z-10 rounded-full scale-75 group-hover:scale-110 transition-transform duration-700 opacity-50" />
                </div>

                <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl lg:text-3xl font-heading font-bold mb-2 lg:mb-3 tracking-tight"
                    >
                        <span className="text-white">Ashish</span> <span className="text-gradient-gold">Kumar</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="px-3 lg:px-4 py-1.5 lg:py-2 bg-white/5 rounded-xl lg:rounded-2xl border border-white/10 mb-0 lg:mb-10"
                    >
                        <span className="text-[9px] lg:text-[10px] font-bold text-gold-400/90 tracking-[0.1em] uppercase leading-relaxed">MCA Student | Tech Enthusiast</span>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {(isOpen || window.innerWidth >= 1024) && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="w-full space-y-6 lg:space-y-8"
                    >
                        <div className="space-y-4 lg:space-y-6">
                            <h3 className="text-left text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] border-b border-white/5 pb-3">Contact Information</h3>

                            <ContactItem icon={Mail} text="work.ashish00@gmail.com" label="Email" delay={0.1} />
                            <ContactItem icon={MapPin} text="Noida, UP" label="Location" delay={0.2} />
                        </div>

                        <div className="flex justify-center gap-4 pt-6 lg:pt-8 border-t border-white/5">
                            <SocialIcon icon={Mail} href="mailto:work.ashish00@gmail.com" />
                            <SocialIcon icon={Github} href="https://github.com/ashishkr1611" />
                            <SocialIcon icon={Linkedin} href="https://linkedin.com/in/ashish2510" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </aside>
    );
};

const ContactItem = ({ icon: Icon, text, label, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + delay }}
        className="flex items-center gap-5 group cursor-pointer"
    >
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-gold-400 group-hover:text-white group-hover:bg-gold-500 group-hover:border-gold-400 transition-[color,background-color,border-color] duration-300">
            <Icon size={16} />
        </div>
        <div className="text-left">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">{label}</p>
            <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors truncate max-w-[160px]">{text}</p>
        </div>
    </motion.div>
);

const SocialIcon = ({ icon: Icon, href }) => (
    <motion.a
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={href}
        className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-[color,background-color,transform] duration-300 border border-white/5"
        target="_blank"
        rel="noreferrer"
    >
        <Icon size={18} />
    </motion.a>
);

export default Sidebar;
