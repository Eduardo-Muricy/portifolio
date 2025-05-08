import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AosInit from './aos-init'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    
    <App  />
   <AosInit/>
  </StrictMode>,
   
  
)
