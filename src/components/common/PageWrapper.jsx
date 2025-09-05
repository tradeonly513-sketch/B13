import React, { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/all'
import BackToHome from './BackToHome'
import { useSmoothScroll } from './SmoothScrollProvider'

gsap.registerPlugin(ScrollTrigger)

const PageWrapper = ({ children, className = '' }) => {
  const pageRef = useRef(null)
  const location = useLocation()
  const { scrollTo } = useSmoothScroll()

  // Reset scroll position on route change
  useEffect(() => {
    // Use Lenis smooth scroll to top instead of native scrollTo
    if (scrollTo) {
      scrollTo(0, { duration: 0 }) // Instant scroll to top
    } else {
      window.scrollTo(0, 0)
    }
    // Force refresh ScrollTrigger whenever route changes
    setTimeout(() => ScrollTrigger.refresh(), 100)
  }, [location.pathname, scrollTo])

  useGSAP(() => {
    gsap.set(pageRef.current, { opacity: 1 })

    gsap.fromTo(
      pageRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.3,
      }
    )
  }, [location.pathname])

  return (
    <>
      <BackToHome />
      <div ref={pageRef} className={`min-h-screen scroll-optimized ${className}`} style={{ opacity: 1 }}>
        {children}
      </div>
    </>
  )
}

export default PageWrapper
