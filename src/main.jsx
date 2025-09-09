import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PhysicsBotByBadri from './PhysicsBotByBadri.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PhysicsBotByBadri />
  </StrictMode>,
)
