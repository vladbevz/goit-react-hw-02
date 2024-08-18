import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './сomponents/App/App'
import './index.module.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
