import { useState } from "react";

import './App.css'

import Home from './components/home/Home'
import Roomlist from './components/roomlist/Roomlist'
import Topbar from './components/topbar/Topbar'
import Menu from './components/menu/Menu';

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Roomlist />
    </div>
  )
}

export default App
