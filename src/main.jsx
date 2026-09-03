import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ContentProvider } from './context/ContentContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ContentProvider>
        <App />
      </ContentProvider>
    </HashRouter>
  </StrictMode>,
)
