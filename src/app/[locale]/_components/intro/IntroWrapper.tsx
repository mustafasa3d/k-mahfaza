"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroAnimation from "./IntroAnimation";

type Props = {
    children: ReactNode;
};

export default function IntroWrapper({ children }: Props) {
    const [showIntro, setShowIntro] = useState(true);
    const [showMainContent, setShowMainContent] = useState(false);

    useEffect(() => {
        const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
        if (hasSeenIntro === "true") {
            setShowIntro(false);
            setShowMainContent(true);
        }
    }, []);

    const handleIntroComplete = () => {
        setShowIntro(false);
        sessionStorage.setItem("hasSeenIntro", "true");
        setTimeout(() => {
            setShowMainContent(true);
        }, 300);
    };

    return (
        <div className="min-h-dvh">
            <AnimatePresence mode="wait">
                {showIntro && (
                    <IntroAnimation key="intro" onComplete={handleIntroComplete} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showMainContent && (
                    <motion.div
                        key="main-content"
                        className="min-h-screen"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
