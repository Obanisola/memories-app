import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Sun, Moon } from 'lucide-react'

export default function MemoriesLanding() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted email:', email)
        setIsSubmitted(true)
        setEmail('')
    }

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
            <style jsx global>{`
        body {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'%3E%3C/path%3E%3Ccircle cx='12' cy='13' r='4'%3E%3C/circle%3E%3Cline x1='8' y1='21' x2='16' y2='21'%3E%3C/line%3E%3Cline x1='12' y1='8' x2='12' y2='10'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='10' y2='12'%3E%3C/line%3E%3Cline x1='14' y1='12' x2='16' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='14' x2='12' y2='16'%3E%3C/line%3E%3C/svg%3E") 0 0, auto;
        }
        .dark body {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'%3E%3C/path%3E%3Ccircle cx='12' cy='13' r='4'%3E%3C/circle%3E%3Cline x1='8' y1='21' x2='16' y2='21'%3E%3C/line%3E%3Cline x1='12' y1='8' x2='12' y2='10'%3E%3C/line%3E%3Cline x1='8' y1='12' x2='10' y2='12'%3E%3C/line%3E%3Cline x1='14' y1='12' x2='16' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='14' x2='12' y2='16'%3E%3C/line%3E%3C/svg%3E") 0 0, auto;
        }
      `}</style>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 z-10 px-4 py-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                        <Camera className="w-8 h-8 text-[#6D39DB]" />
                        <span className="text-2xl font-bold text-[#6D39DB]">memories</span>
                    </div>
                    <nav className="flex items-center space-x-6">
                        <a href="#waitlist" className="px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-[#6D39DB] dark:hover:bg-[#6D39DB] dark:hover:text-white rounded transition duration-300">Join Waitlist</a>
                    </nav>
                </header>

                <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                    <section className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                        <div className="lg:w-1/2 mb-12 lg:mb-0">
                            <motion.h1
                                className="text-5xl sm:text-6xl font-bold leading-tight mb-6"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Never Miss a Moment.<br />
                                Access Your Memories Instantly.
                            </motion.h1>
                            <motion.p
                                className="text-xl text-gray-600 dark:text-gray-300 mb-8"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Memories helps event attendees access and share professional photos effortlessly. Coming soon!
                            </motion.p>
                            <motion.a
                                href="#waitlist"
                                className="inline-block px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-[#6D39DB] dark:hover:bg-[#6D39DB] dark:hover:text-white rounded transition duration-300"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Join Waitlist
                            </motion.a>
                        </div>
                        <div className="lg:w-1/2">
                            {/* CSS Illustration Starts Here */}
                            <div className="relative w-full h-80 bg-gradient-to-br from-[#6D39DB] to-purple-500 rounded-lg p-8">
                                {/* Illustration Container */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                                    {/* Icon 1: Upload */}
                                    <div className="flex flex-col items-center">
                                        <Camera className="w-12 h-12 text-white mb-2" />
                                        <span className="text-white">Easy Upload</span>
                                    </div>
                                    {/* Icon 2: Search */}
                                    <div className="flex flex-col items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l4-4-4-4m8 8l-4-4 4-4" />
                                        </svg>
                                        <span className="text-white">Smart Search</span>
                                    </div>
                                    {/* Icon 3: Share */}
                                    <div className="flex flex-col items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                        <span className="text-white">Share Memories</span>
                                    </div>
                                </div>
                            </div>
                            {/* CSS Illustration Ends Here */}
                        </div>
                    </section>

                    {/* Key Features Section Removed */}

                    <section id="waitlist" className="max-w-4xl mx-auto mt-20 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
                        <h2 className="text-3xl font-bold text-center mb-6">Join the Waitlist</h2>
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
                                    className="w-full sm:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#6D39DB] dark:bg-gray-700 dark:text-white"
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 py-2 bg-black text-white dark:bg-white dark:text-black hover:bg-[#6D39DB] dark:hover:bg-[#6D39DB] dark:hover:text-white rounded transition duration-300"
                                >
                                    Join Waitlist
                                </button>
                            </motion.form>
                        )}
                    </section>
                </main>

                <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="flex items-center space-x-2 mb-4 md:mb-0">
                                <Camera className="w-6 h-6 text-[#6D39DB]" />
                                <span className="text-xl font-bold text-[#6D39DB]">memories</span>
                            </div>
                            <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#6D39DB] dark:hover:text-[#6D39DB]">About</a>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#6D39DB] dark:hover:text-[#6D39DB]">Privacy</a>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#6D39DB] dark:hover:text-[#6D39DB]">Terms</a>
                                <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#6D39DB] dark:hover:text-[#6D39DB]">Contact</a>
                            </nav>
                        </div>
                        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                            © {new Date().getFullYear()} memories. All rights reserved.
                        </div>
                    </div>
                </footer>

                <button
                    onClick={toggleDarkMode}
                    className="fixed bottom-4 left-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                    {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
            </div>
        </div>
    )
}