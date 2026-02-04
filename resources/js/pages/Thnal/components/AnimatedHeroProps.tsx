import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';
import { AlertDialogSearch } from './Search/AlertDielogSearch';
import ThnalSearch from './Search/ThnalSearch';

// Interface definitions remain the same
interface NavLink {
    label: string;
    href: string;
}

interface AnimatedHeroProps {
    backgroundImageUrl: string;
    logo: React.ReactNode;
    navLinks: NavLink[];
    topRightAction?: React.ReactNode;
    title: string;
    description: string;
    ctaButton: {
        text: string;
        onClick: () => void;
    };
    secondaryCta?: {
        text: string;
        onClick: () => void;
    };
    className?: string;
}

// Animation variants remain the same
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export const AnimatedHero = ({
    backgroundImageUrl,
    logo,
    // navLinks,
    topRightAction,
    title,
    description,
    ctaButton,
    secondaryCta,
    className,
}: AnimatedHeroProps) => {
    // Define the new reusable glass button style

    return (
        <div className={cn('relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background', className)}>
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/assets/images/banners/${backgroundImageUrl}')` }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="section-container absolute top-0 z-20 flex h-28 w-full items-center justify-between px-6 text-white md:px-12"
            >
                <div className="flex items-center gap-2">{logo}</div>
                {/* <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav> */}
                <div className="hidden md:block">{topRightAction}</div>
            </motion.header>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="section-container relative z-10 flex w-full flex-col justify-center px-6 text-left text-white md:px-12"
            >
                <motion.h1 variants={itemVariants} className="text-xl font-bold tracking-tight text-primary-foreground sm:text-2xl">
                    {title}
                </motion.h1>
                <motion.p variants={itemVariants} className="mt-2 max-w-2xl text-base leading-8 text-primary-foreground/80">
                    {description}
                </motion.p>
                <motion.div variants={itemVariants} className="mt-10 flex items-center gap-x-4">
                    {/* UPDATED: Applied the new glass button style */}
                    <ThnalSearch />
                    <AlertDialogSearch />
                </motion.div>
            </motion.div>
        </div>
    );
};
