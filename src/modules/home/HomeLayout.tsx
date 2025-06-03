'use client';

import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion, useAnimation } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Person from './components/Person';
import Image from 'next/image';
import Link from 'next/link';

const HomeLayout = () => {
  const controls = useAnimation();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          src="hero-1.mp4"
        />
<div className="absolute inset-0 bg-transparent"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-30 bg-opacity-80 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center">
        <Link href="/">
          <Image src="/icons/resume-icon.png" alt="logo" width={36} height={36} />
        </Link>
        <div className="flex gap-4">
          <Link href="/builder"><StyledButton variant="text">Editor</StyledButton></Link>
          <Link href="#contribute"><StyledButton variant="text">Contribute</StyledButton></Link>
          <Link href="#about-us"><StyledButton variant="text">About Me</StyledButton></Link>
          <a href="https://github.com/23CABPREMKUMARP" target="_blank" rel="noreferrer">
            <BsGithub className="h-6 w-6 text-white" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center text-white px-4 pt-28">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Build Your Professional Resume</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">Create beautiful, recruiter-ready resumes effortlessly with our modern builder.</p>
        <Link href="/builder">
          <Button variant="contained" className="bg-blue-600 hover:bg-blue-700">Start Building</Button>
        </Link>
      </section>

      {/* Features */}
      <section className="bg-white text-gray-800 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureSection />
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section id="contribute" className="bg-gradient-to-r from-blue-100 via-blue-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Want to contribute a new template?</h2>
          <p className="mb-6">If you love React and design, contribute your own resume templates to our open-source project.</p>
          <a href="https://github.com/23CABPREMKUMARP" target="_blank" rel="noreferrer">
            <Button variant="contained" className="bg-blue-600 hover:bg-blue-700">Contribute on GitHub</Button>
          </a>
        </div>
      </section>

      {/* About Us */}
      <section id="about-us" className="bg-white text-gray-800 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Meet the Developer</h2>
          <p className="text-center text-gray-600 mb-10">
            A passionate team of developers building open-source tools for students and professionals.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <Person />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        © 2025 Premkumar | Open Source Resume Builder
      </footer>
    </motion.div>
  );
};

export default HomeLayout;
