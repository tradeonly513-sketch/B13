import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSmoothScroll } from './SmoothScrollProvider'

const Stairs = (props) => {

    const currentPath = useLocation().pathname
    const { stop, start } = useSmoothScroll()

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    // Ensure content is visible on initial load
    useEffect(() => {
        if (pageRef.current) {
            gsap.set(pageRef.current, { opacity: 1 })
        }
    }, [])
    useGSAP(function () {
        // Ensure stairs are hidden initially
        gsap.set(stairParentRef.current, { display: 'none' })
        
        // Stop smooth scrolling during transition
        if (stop) stop()
        
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block',
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })
        tl.call(() => {
            // Restart smooth scrolling after transition
            if (start) start()
        })

        gsap.fromTo(pageRef.current, {
            opacity:0,
            scale:1.2
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 1.3,
            ease: "power2.out",
            onComplete: () => {
                // Ensure smooth scrolling is active after page load
                if (start) start()
            }
        })
    }, [currentPath, stop, start])
    

    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef} style={{ opacity: 1 }}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs