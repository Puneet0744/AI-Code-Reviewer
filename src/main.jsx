import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure you have a <div id="root"></div> in your HTML.');
}

try {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} catch (error) {
  console.error('Failed to render app:', error);
  rootElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; flex-direction: column; color: #fff; background: #0a0a0a; font-family: system-ui;">
      <h1 style="color: #9333ea; margin-bottom: 16px;">⚠️ Application Error</h1>
      <p style="color: rgba(228, 228, 231, 0.9); margin-bottom: 8px;">Failed to load the application.</p>
      <p style="color: rgba(161, 161, 170, 0.7); font-size: 14px;">${error.message}</p>
      <p style="color: rgba(161, 161, 170, 0.7); font-size: 12px; margin-top: 24px;">Check the browser console for more details.</p>
    </div>
  `;
}
