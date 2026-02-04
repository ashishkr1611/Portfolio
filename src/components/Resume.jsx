import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award, Globe, Download } from 'lucide-react';

const Resume = () => {
    const education = [
        {
            title: "Master of Computer Applications (MCA)",
            institution: "Manipal University Jaipur (Online / MAHE)",
            duration: "2025 – Present",
            description: "Currently pursuing advanced studies in computer applications with a focus on modern software development."
        },
        {
            title: "Bachelor of Computer Applications (BCA)",
            institution: "Sharda University, Greater Noida",
            duration: "2022 – 2025",
            description: "Graduated with a strong foundation in computer science principles and application development."
        },
        {
            title: "Intermediate (Class XII)",
            institution: "Bihar School Examination Board",
            duration: "70.6%",
            description: "Completed higher secondary education with a focus on core subjects."
        },
        {
            title: "Matriculation (Class X)",
            institution: "CBSE – CS DAV Public School",
            duration: "80.4%",
            description: "Achieved strong academic results in secondary school."
        }
    ];

    const internship = {
        title: "E-Commerce Operations Intern",
        company: "Phooldaan",
        duration: "May 2024 – June 2024",
        responsibilities: [
            "Managed structured Excel spreadsheets for e-commerce workflows",
            "Performed data quality checks",
            "Streamlined data entry processes",
            "Resolved discrepancies through team collaboration"
        ]
    };

    const certifications = [
        {
            title: "4-Week Virtual Internship Program",
            issuer: "Certificate of Completion",
            date: "2024",
            details: ["Focused on industrial workflows and practical applications"]
        },
        {
            title: "International Conference on Advanced Sustainable Futuristic Materials",
            issuer: "Conference Participation",
            date: "2024",
            details: ["Engaged with cutting-edge research in sustainable materials"]
        }
    ];


    return (
        <div className="space-y-12 animate-fade-in">
            {/* Download Resume Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
                <div className="flex items-center gap-4">
                    <BookOpen className="text-gold-400" size={28} />
                    <h2 className="text-3xl font-heading font-bold text-white">Resume</h2>
                </div>

                <motion.a
                    href="/resume.pdf"
                    download="Ashish_Kumar_Resume.pdf"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-8 py-4 bg-gold-400/5 border border-gold-400/20 rounded-2xl text-gold-400 font-semibold shadow-xl hover:bg-gold-400/10 hover:border-gold-400/40 transition-all duration-300 group"
                >
                    <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                    Download Resume
                </motion.a>
            </div>

            {/* Education Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-[1px] bg-gold-400/30" />
                    <h3 className="text-xl font-heading font-bold text-white opacity-80">Education</h3>
                </div>
                <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
                    {education.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-10"
                        >
                            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#111] border-2 border-gold-400/50 shadow-[0_0_10px_rgba(250,204,21,0.2)]" />
                            <div className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300">
                                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-gold-400/80 text-sm font-medium mb-3">{item.institution}</p>
                                <span className="inline-block px-3 py-1 rounded-lg bg-white/5 text-xs text-gray-400 mb-4">{item.duration}</span>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Internship Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-[1px] bg-gold-400/30" />
                    <h3 className="text-xl font-heading font-bold text-white opacity-80">Internship</h3>
                </div>
                <div className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl group-hover:bg-gold-400/10 transition-colors" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h3 className="text-xl font-bold text-white">{internship.title}</h3>
                            <p className="text-gold-400 font-medium">{internship.company}</p>
                        </div>
                        <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10 uppercase tracking-widest">{internship.duration}</span>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {internship.responsibilities.map((resp, i) => (
                            <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                                {resp}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            {/* Certifications Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-[1px] bg-gold-400/30" />
                    <h3 className="text-xl font-heading font-bold text-white opacity-80">Certifications</h3>
                </div>

                <div className="space-y-6">
                    {certifications.map((cert, index) => (
                        <div key={index} className="glass-panel p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl group-hover:bg-gold-400/10 transition-colors" />
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                                    <p className="text-gold-400 font-medium">{cert.issuer}</p>
                                </div>
                                <span className="px-4 py-1.5 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10 uppercase tracking-widest">{cert.date}</span>
                            </div>
                            <ul className="space-y-3">
                                {cert.details.map((detail, i) => (
                                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-1.5 flex-shrink-0" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Languages Section */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-[1px] bg-gold-400/30" />
                    <h3 className="text-xl font-heading font-bold text-white opacity-80">Languages</h3>
                </div>
                <div className="flex gap-3">
                    {["English", "Hindi"].map(lang => (
                        <span key={lang} className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {lang}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resume;
