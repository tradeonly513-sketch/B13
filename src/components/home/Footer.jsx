import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'
import { useSmoothScroll } from '../common/SmoothScrollProvider'

const Footer = () => {
  const footerRef = useRef(null)
  const { scrollTo } = useSmoothScroll()
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Animate footer content
    gsap.fromTo('.footer-content',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: '.footer-content',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const quickLinks = [
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Affiliates', href: '#affiliates' }
  ]

  return (
    <footer ref={footerRef} className='section-dark text-white relative depth-3'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding'>
        {/* Main CTA Section */}
        <div className='text-center component-margin footer-content'>
          <div className='floating-panel-dark space-y-6 sm:space-y-8'>
            <h2 className='font-[font2] text-4xl sm:text-5xl lg:text-[6vw] uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow'>
            Let's Talk About Your Project
            </h2>
            <div className='flex justify-center'>
              <button className='btn-pill btn-primary h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-12 group'>
                <span className='font-[font2] text-base sm:text-lg lg:text-xl'>
                Inquire Now
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Information Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-12 sm:mb-16'>
          {/* Quick Links */}
          <div className='footer-content floating-panel-dark space-y-4 sm:space-y-6'>
            <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2'>
              Quick Links
            </h3>
            <ul className='space-y-3 sm:space-y-4'>
              <li>
                <button 
                  onClick={() => {
                    if (scrollTo) {
                      scrollTo('#portfolio', {
                        offset: -100,
                        duration: 1.5
                      })
                    }
                  }}
                  className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover text-left micro-bounce w-full text-left'
                >
                  Our Portfolio
                </button>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover micro-bounce block'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy"
                  className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover micro-bounce block'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service"
                  className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover micro-bounce block'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/affiliate-program"
                  className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 interactive-hover micro-bounce block'
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Address */}
          <div className='footer-content floating-panel-dark space-y-4 sm:space-y-6'>
            <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow'>
              Address
            </h3>
            <div className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 leading-relaxed space-y-1 sm:space-y-2'>
              <p>22 ruelle du Clerc</p>
              <p>59126, Linselles</p>
              <p>(France)</p>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className='footer-content floating-panel-dark space-y-4 sm:space-y-6'>
            <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow'>
              Hours
            </h3>
            <div className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1 space-y-2 sm:space-y-3'>
              <p>M–F: 9am – 7pm (UTC+1)</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className='footer-content floating-panel-dark space-y-4 sm:space-y-6'>
            <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow'>
              Contact
            </h3>
            <div className='font-[font1] text-sm sm:text-base lg:text-lg text-layer-1'>
              <a 
                href="mailto:contact@amouraworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className='interactive-hover micro-bounce break-all sm:break-normal'
              >
                contact@amouraworks.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className='floating-panel-dark text-center'>
          <div className='text-center'>
            <p className='font-[font1] text-xs sm:text-sm lg:text-base text-layer-1'>
              © 2025 Amoura Works. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer