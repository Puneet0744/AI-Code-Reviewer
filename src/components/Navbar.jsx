import React from 'react'
import { BrainCircuit, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="brand-icon-wrapper">
            <BrainCircuit size={28} className="brand-icon" />
            <Sparkles size={16} className="brand-sparkle" />
          </div>
          <span className="brand-text">Codeify</span>
          <span className="brand-badge">AI</span>
        </div>
        <div className="navbar-actions">
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span className="status-text">Ready</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
