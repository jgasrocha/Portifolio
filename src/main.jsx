import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Technologies from './components/Technologies/Technologies'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPython, faDjango, faPhp, faLaravel, faReact, faFlutter } from '@fortawesome/free-brands-svg-icons'

library.add(faPython, faDjango, faPhp, faLaravel, faReact, faFlutter)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <AboutMe />
    <Technologies />
  </StrictMode>,
)
