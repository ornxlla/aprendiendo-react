import { useState } from "react"
import { useEffect } from "react"


const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  useEffect (()=>{
    console.log('efecto', {enabled})
   
    const handleMove = (event) =>{
      const {clientX, clientY} = event
      setPosition({x: clientX, y:clientY})
    }

    if(enabled){
    window.addEventListener('pointermove', handleMove)
  }

  return () => {
    console.log('cleanup')
    window.removeEventListener('pointermove', handleMove)
  }


  }, [enabled])


  return (
    <>
    <div style={{
       position: 'absolute',
       backgroundColor: 'rgba(0, 0, 0, 0.5)',
       border: '1px solid #fff',
       borderRadius: '50%',
       opacity: 0.8,
       pointerEvents: 'none',
       left: -25,
       top: -25,
       width: 50,
       height: 50,
       transform: `translate(${position.x}px, ${position.y}px)`
    }}> </div>
    <button onClick={()=> setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
    {mounted && <FollowMouse/>}
    <button onClick={()=> setMounted(!mounted)}>
    Toggle mounted FollowMouseComponent</button>
    </main>
  )
}
export default App
