import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "./util/axios.customize"

function App() {
  useEffect(() => {
    const fetchHelloWorld = async () => {
      const res = await axios.get(`/v1/api`)
      console.log("check", res);

    }
    fetchHelloWorld()
  }, [])

  return (
    <>
     <p>Hello from client</p>
    </>
  )
}

export default App
