import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, Users, Monitor, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Revolutionizing Campus Navigation using Video-Enriched SUMAP",
            duration: "Feb 2024 – Mar 2024",
            description: "Developed a concept for video-based campus navigation to improve student onboarding and accessibility.",
            features: [
                "Designed video-based navigation concept",
                "Improved student onboarding experience",
                "Proposed integration with college systems",
                "Applied multimedia for accessibility"
            ],
            icon: Map,
            tags: ["UI/UX", "Multimedia", "Navigation"]
        }
    ];

    return (
        <div className="space-y-12 animate-fade-in">
            <section>
                <h2 className="text-4xl font-heading font-bold text-white mb-4">Project</h2>
                <div className="w-12 h-1 bg-gold-400 rounded-full mb-10" />
            </section>
            <div className="grid grid-cols-1 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="glass-panel p-8 lg:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group"
                    >
                        {/* Accent Glow */}
                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-gold-400/5 rounded-full blur-[80px] group-hover:bg-gold-400/10 transition-colors" />

                        <div className="flex flex-col lg:flex-row gap-10 relative z-10">
                            {/* Project Icon/Visual */}
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400/20 to-transparent border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-2xl flex-shrink-0">
                                <project.icon size={40} strokeWidth={1.5} />
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">{project.title}</h3>
                                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-500 whitespace-nowrap">
                                        <Calendar size={14} />
                                        {project.duration}
                                    </div>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 group/feat hover:bg-white/[0.05] transition-colors">
                                            <Zap className="text-gold-400 mt-1 flex-shrink-0" size={16} />
                                            <p className="text-sm text-gray-300 leading-snug">{feature}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3 pt-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-5 py-1.5 rounded-xl bg-gold-400/5 border border-gold-400/10 text-[10px] font-bold text-gold-400 uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
