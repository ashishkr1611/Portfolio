import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative font-sans selection:bg-gold-500/30 selection:text-gold-200">

      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -40, 80, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 80, -40, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ willChange: 'transform' }}
          className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-gold-600/10 rounded-full blur-[80px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 py-8 lg:py-16 relative z-10 max-w-7xl xl:max-w-7xl"
      >
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">

          {/* Left Sidebar */}
          <div className="w-full lg:w-[320px] lg:flex-shrink-0 lg:sticky lg:top-16 z-20">
            <Sidebar />
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-0">
            <MainContent />
          </div>

        </div>
      </motion.div>

      {/* Global Bottom Decoration */}
      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
}

export default App;
