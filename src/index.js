import React from 'react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    })
  }, [])

  useEffect(() => {
    const mouseClickHandler = () => {
      setAnimation(true)
      const timeOutId = setTimeout(() => {
        setAnimation(false)
      }, 100)
      return () => clearTimeout(timeOutId)
    }
    document.addEventListener('click', mouseClickHandler)

    return () => {
      document.removeEventListener('click', mouseClickHandler)
    }
  }, [])

  return (
    <div>
      <div
        className={`${styles.cursor} ${styles.ring} ${
          animation ? styles.animate : styles.ring
        } `}
        style={{ left: position.x, top: position.y }}
      />
      <div
        className={`${styles.cursor} ${styles.dot}`}
        style={{ left: position.x, top: position.y }}
      />
    </div>
  )
}

export default CustomCursor
