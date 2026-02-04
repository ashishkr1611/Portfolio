import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 hover:border-gold-400/30 transition-[transform,border-color,box-shadow] duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
            {/* Spotlight Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]" />
            <div className="absolute -inset-[1px] bg-gradient-to-tr from-gold-500/10 via-transparent to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-gold-400 group-hover:bg-gold-500 group-hover:text-black group-hover:scale-110 transition-[background-color,color,transform] duration-500 shadow-xl">
                    <Icon size={24} strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {description}
                </p>
            </div>

            {/* Bottom accent link/arrow decorative */}
            <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-30 group-hover:translate-x-2 transition-[opacity,transform] duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-400"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
