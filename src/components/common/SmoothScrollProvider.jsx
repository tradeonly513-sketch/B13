import React, { createContext, useContext } from 'react'
import useLenis from '../../hooks/useLenis'

const SmoothScrollContext = createContext()

export const useSmoothScroll = () => {
  const context = useContext(SmoothScrollContext)
  if (!context) {
    throw new Error('useSmoothScroll must be used within SmoothScrollProvider')
  }
  return context
}

const SmoothScrollProvider = ({ children }) => {
  const { lenis, scrollTo, stop, start } = useLenis()

  return (
    <SmoothScrollContext.Provider value={{ lenis, scrollTo, stop, start }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

export default SmoothScrollProvider