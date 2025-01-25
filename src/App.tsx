import React, { useEffect, useState } from 'react'
function App() {
  const [online, setOnline] = useState<boolean>(navigator.onLine)


  useEffect(() => {
    const handleOnline = () => {
      setOnline(true)
    }
    const handleOffline = () => {
      setOnline(false)
    }


    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)


    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])


  return (

    <div className='flex justify-center items-center my-7'>
      <div className='bg-gray-600 w-auto text-white' >
        <h1>
          {online ? "" : "OOPS! Check your internet connection 👀"}
        </h1>
      </div>
    </div>

  )
}

export default App
