import React from 'react';
import { Film, Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="space-y-16">
            {/* About Me Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-[1px] bg-gold-400 opacity-50" />
                    <h2 className="text-sm font-semibold text-gold-400 uppercase tracking-[0.4em]">About Me</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative"
                >
                    <p className="text-lg lg:text-xl text-gray-400 leading-relaxed font-light">
                        Hi, I’m <span className="text-white font-medium">Ashish Kumar</span> — a Computer Applications student with a strong interest in <span className="text-white font-medium">software development</span> and data-driven problem solving. I’m currently pursuing my <span className="text-white font-medium">MCA (Online)</span> from Manipal University Jaipur after completing my BCA from Sharda University.
                        <br /><br />
                        I have practical experience working with structured data, Excel-based workflows, and research-oriented projects. I’ve also worked as an <span className="text-white">E-Commerce Operations Intern</span>, where I handled data management, quality checks, and process optimization.
                        <br /><br />
                        I enjoy learning new tools and technologies, improving my technical skills, and building projects that solve <span className="text-white">real-world problems</span>. My goal is to grow as a software professional and contribute to impactful digital solutions.
                    </p>

                </motion.div>
            </section>

            {/* Skills Section */}
            <section>
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-[1px] bg-gold-400 opacity-50" />
                    <h2 className="text-sm font-semibold text-gold-400 uppercase tracking-[0.4em]">Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Technical Skills */}
                    <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-gold-400 rounded-full" />
                            Technical Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["C", "Python", "HTML5", "CSS", "Microsoft Excel", "Word", "PowerPoint"].map(skill => (
                                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:text-white hover:border-gold-400/30 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Additional Skills */}
                    <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-gold-400 rounded-full" />
                            Additional Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Video Editing", "Social Media Handling"].map(skill => (
                                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:text-white hover:border-gold-400/30 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="glass-panel p-8 rounded-3xl border border-white/5 space-y-6 md:col-span-2">
                        <h3 className="text-lg font-bold text-white flex items-center gap-3">
                            <span className="w-1.5 h-6 bg-gold-400 rounded-full" />
                            Soft Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {["Collaboration", "Communication", "Time Management", "Quick Learner", "Adaptability"].map(skill => (
                                <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:text-white hover:border-gold-400/30 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Badge = ({ icon: Icon, text }) => (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:border-white/20 transition-colors">
        <Icon size={14} className="text-gold-400" />
        {text}
    </div>
);

export default About;
