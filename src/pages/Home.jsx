import React, { useRef, useContext, useEffect } from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import Header from '../components/common/Header'
import WhyUsSection from '../components/home/WhyUsSection'
import PortfolioSection from '../components/home/PortfolioSection'
import StatsSection from '../components/home/StatsSection'
import ServicesSection from '../components/home/ServicesSection'
import ProcessSection from '../components/home/ProcessSection'
import CTASection from '../components/home/CTASection'
import AboutSection from '../components/home/AboutSection'
import ContactSection from '../components/home/ContactSection'
import Footer from '../components/home/Footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useSmoothScroll } from '../components/common/SmoothScrollProvider'

const Home = () => {
  const heroSectionRef = useRef(null)
  const { lenis } = useSmoothScroll()

  // iOS video autoplay optimization
  useEffect(() => {
    const handleUserInteraction = () => {
      // Find all videos and attempt to play them after user interaction
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.warn('Video play failed after user interaction:', error);
            });
          }
        }
      });
      
      // Remove event listeners after first interaction
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };

    // Add event listeners for user interaction on iOS
    document.addEventListener('touchstart', handleUserInteraction, { passive: true });
    document.addEventListener('click', handleUserInteraction, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  useGSAP(() => {
    // Smooth fade-in animation for hero content
    gsap.fromTo('.hero-content', 
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
        onComplete: () => {
          // Ensure ScrollTrigger is refreshed after hero animation
          if (lenis) {
            setTimeout(() => {
              gsap.set('.hero-content', { clearProps: 'all' })
            }, 100)
          }
        }
      }
    )
  }, [lenis])

  return (
    <div className='text-white relative overflow-x-hidden scroll-optimized'>
      {/* Cinematic Header Overlay */}
      <Header />
      
      {/* Fixed video background */}
      <div className='h-screen h-[100dvh] w-screen fixed top-0 left-0 z-0 gpu-accelerated'>
        <Video />
        {/* Dark overlay for better text readability */}
        <div className='absolute inset-0 bg-black/50 sm:bg-black/40 lg:bg-black/30 z-10'></div>
      </div>
      
      {/* Scrollable content */}
      <div className='relative z-20'>
        {/* Hero Section */}
        <div ref={heroSectionRef} className='h-screen h-[100dvh] w-screen relative flex flex-col hero-content scroll-optimized'>
          <HomeHeroText />
        </div>
        
        {/* Why Us Section */}
        <div className="scroll-optimized">
          <WhyUsSection />
        </div>
        
        {/* Portfolio Section */}
        <div className="scroll-optimized">
          <PortfolioSection />
        </div>
        
        {/* Stats Section */}
        <div className="scroll-optimized">
          <StatsSection />
        </div>
        
        {/* Services Section */}
        <div className="scroll-optimized">
          <ServicesSection />
        </div>
        
        {/* Process Section */}
        <div className="scroll-optimized">
          <ProcessSection />
        </div>
        
        {/* Call-to-Action Section */}
        <div className="scroll-optimized">
          <CTASection />
        </div>
        
        {/* About Us Section */}
        <div className="scroll-optimized">
          <AboutSection />
        </div>
        
        {/* Contact Section */}
        <div className="scroll-optimized">
          <ContactSection />
        </div>
        
        {/* Footer Section */}
        <div className="scroll-optimized">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home