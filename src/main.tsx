import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import './tokens/index.css'
import { Preview } from './Preview'
import { FinanceDashboard } from './pages/FinanceDashboard/FinanceDashboard'

function App() {
  const path = window.location.pathname
  if (path === '/dashboard') return <FinanceDashboard />
  return <Preview />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
