// npm run dev

import { useState } from 'react'
import HeaderMobile from './components/HeaderMobile'
import SidebarMain from './components/SidebarMain'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderMobile />
      <SidebarMain />
    </>
  )
}

export default App
