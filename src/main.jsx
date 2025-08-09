import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ensureAnonymous, initAnalytics } from "./firebase";
ensureAnonymous();  // auto anon sign-in (make sure Anonymous is enabled in Firebase Auth)
initAnalytics();    // optional; does nothing in dev

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
