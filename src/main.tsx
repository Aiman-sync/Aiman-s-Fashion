import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Mark lazy images as loaded once they finish loading (capturing phase for all elements)
const handleImageLoad = (e: Event) => {
  const el = e.target;
  if (el instanceof HTMLImageElement && el.loading === 'lazy') {
    el.setAttribute('data-loaded', '');
  }
};

document.addEventListener('load', handleImageLoad, true);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
