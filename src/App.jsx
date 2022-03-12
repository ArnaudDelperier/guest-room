import { useState } from "react";

import './App.css'

import Topbar from './components/topbar/Topbar'
import Menu from './components/menu/Menu';
import Home from './components/home/Home'
import Roomlist from './components/roomlist/Roomlist'
import Contact from "./components/contact/Contact";
import Map from "./components/map/Map";

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Roomlist />
      <Contact />
      <Map></Map>
    </div>
  )
}

export default App
