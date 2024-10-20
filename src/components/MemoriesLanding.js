// src/components/MemoriesLanding.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, Search, Users, Mail, Sun, Moon, Menu } from 'lucide-react';

const MemoriesLanding = () => {
    const [showCookieConsent, setShowCookieConsent] = useState(true);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const acceptCookies = () => setShowCookieConsent(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted email:', email);
        setIsSubmitted(true);
        setEmail('');
    };

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const features = [
        { icon: Upload, title: "Easy Upload", description: "Event organizers can quickly upload and manage event photos." },
        { icon: Search, title: "Smart Search", description: "Attendees can find their photos using advanced facial recognition." },
        { icon: Users, title: "Share Memories", description: "Access and share professional event photos with ease." },
    ];

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
            {/* Removed <style jsx global> block */}
            <div className="bg-white dark:bg-black transition-colors duration-300">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 bg-white dark:bg-black z-10 p-4 flex justify-between items-center shadow-md dark:shadow-gray-800">
                    <div className="flex items-center space-x-2">
                        <Camera className="w-8 h-8 text-[#6d39db] dark:text-[#8a5cf5]" />
                        <span className="text-2xl font-bold text-[#6d39db] dark:text-[#8a5cf5]">memories</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-4">
                        <a href="#waitlist" className="px-4 py-2 text-sm text-white bg-[#6d39db] hover:bg-[#5b2db8] dark:bg-[#8a5cf5] dark:hover:bg-[#7140e0] rounded-full transition duration-300">Join Waitlist</a>
                    </nav>
                    <button onClick={toggleMenu} className="md:hidden text-gray-600 dark:text-gray-300">
                        <Menu className="w-6 h-6" />
                    </button>
                </header>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 bg-white dark:bg-black pt-16">
                        <nav className="flex flex-col items-center space-y-4 p-4">
                            <a href="#waitlist" onClick={toggleMenu} className="px-4 py-2 text-sm text-white bg-[#6d39db] hover:bg-[#5b2db8] dark:bg-[#8a5cf5] dark:hover:bg-[#7140e0] rounded-full transition duration-300">Join Waitlist</a>
                        </nav>
                    </div>
                )}

                {/* Main Content */}
                <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <section className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Capture and Share Event Memories
                        </motion.h1>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Access professional photos from events you attend, effortlessly. Coming soon!
                        </motion.p>
                        <motion.a
                            href="#waitlist"
                            className="inline-block px-6 py-3 text-white bg-[#6d39db] hover:bg-[#5b2db8] dark:bg-[#8a5cf5] dark:hover:bg-[#7140e0] rounded-full transition duration-300"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Join the Waitlist
                        </motion.a>
                    </section>

                    {/* Features Section */}
                    <section id="features" className="max-w-5xl mx-auto mt-20">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Key Features</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <feature.icon className="w-12 h-12 text-[#6d39db] dark:text-[#8a5cf5] mx-auto mb-4" />
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Waitlist Section */}
                    <section id="waitlist" className="max-w-4xl mx-auto mt-20 bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">Join the Waitlist</h2>
                        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                            Be the first to know when we launch. Sign up for exclusive early access!
                        </p>
                        {isSubmitted ? (
                            <motion.div
                                className="text-center text-green-600 dark:text-green-400"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p>Thank you for joining our waitlist! We'll keep you updated.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[#6d39db] dark:focus:ring-[#8a5cf5] dark:bg-gray-800 dark:text-white"
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-2 bg-[#6d39db] text-white rounded-full hover:bg-[#5b2db8] dark:bg-[#8a5cf5] dark:hover:bg-[#7140e0] transition duration-300"
                                >
                                    Join Waitlist
                                </button>
                            </motion.form>
                        )}
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-12">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                                <Camera className="w-6 h-6 text-[#6d39db] dark:text-[#8a5cf5]" />
                                <span className="text-xl font-bold text-[#6d39db] dark:text-[#8a5cf5]">memories</span>
                            </div>
                            <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
                            </nav>
                        </div>
                        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                            {new Date().getFullYear()}. All rights reserved - memories
                        </div>
                    </div>
                </footer>

                {/* Dark Mode Toggle Button */}
                <button
                    onClick={toggleDarkMode}
                    className="fixed bottom-4 left-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                    {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>

                {/* Cookie Consent */}
                {showCookieConsent && (
                    <motion.div
                        className="fixed bottom-4 right-4 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg max-w-xs sm:max-w-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">This website uses cookies to enhance the user experience.</p>
                        <button
                            onClick={acceptCookies}
                            className="w-full px-3 py-1 text-sm text-white bg-[#6d39db] hover:bg-[#5b2db8] dark:bg-[#8a5cf5] dark:hover:bg-[#7140e0] rounded-full transition duration-300"
                        >
                            Accept
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default MemoriesLanding;
