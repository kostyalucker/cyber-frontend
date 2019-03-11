import { useRef, useEffect } from 'react'

export default function useComponentVisible(handler) {
  const ref = useRef(null)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (typeof handler === 'function') handler()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref }
}
