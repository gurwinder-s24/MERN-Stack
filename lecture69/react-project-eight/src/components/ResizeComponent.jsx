import {useState, useEffect} from 'react'

const ResizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    console.log("Event Listener for resize added");
    window.addEventListener('resize', handleResize);
    
    return () => {
      console.log("Cleanup: Event Listener for resize removed");
      window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleanup on unmount
  

  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent
