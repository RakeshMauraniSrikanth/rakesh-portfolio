import gsap from "gsap";
import { Draggable } from "gsap/Draggable"

import { Dock, Home, Navbar, Welcome, } from "#components"
import { Contact, Finder, Resume, Safari, Terminal, Text } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main >
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Contact />
      <Home />
    </main>
  )
}

export default App