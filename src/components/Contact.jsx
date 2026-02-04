import React from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="space-y-12 animate-fade-in">
            {/* Header */}
            <section>
                <h2 className="text-4xl font-heading font-bold text-white mb-4">Contact</h2>
                <div className="w-12 h-1 bg-gold-400 rounded-full mb-10" />
            </section>

            {/* Map Section */}
            <section className="w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112111.458284534!2d77.291763!3d28.527333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c510000!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1707040000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/5" />
            </section>

            {/* Form Section */}
            <section className="space-y-8">
                <h3 className="text-2xl font-heading font-bold text-white">Contact Form</h3>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <input
                                type="text"
                                placeholder="Full name"
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-400/50 focus:bg-white/[0.08] transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-400/50 focus:bg-white/[0.08] transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <textarea
                            placeholder="Your Message"
                            rows="6"
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:border-gold-400/50 focus:bg-white/[0.08] transition-colors resize-none"
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 px-8 py-4 bg-glass-300 border border-white/10 rounded-2xl text-gold-400 font-semibold shadow-xl hover:bg-white/5 hover:border-gold-400/50 transition-[background-color,border-color,transform] group"
                        >
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            Send Message
                        </motion.button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;
