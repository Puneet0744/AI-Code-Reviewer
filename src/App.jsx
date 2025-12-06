import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Editor from '@monaco-editor/react';
import Select from 'react-select';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown'
import RingLoader from "react-spinners/RingLoader";
import { Sparkles, Code2, AlertCircle } from 'lucide-react';

const App = () => {
  const options = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'cpp', label: 'C++' },
    { value: 'php', label: 'PHP' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'go', label: 'Go' },
    { value: 'swift', label: 'Swift' },
    { value: 'kotlin', label: 'Kotlin' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'rust', label: 'Rust' },
    { value: 'dart', label: 'Dart' },
    { value: 'scala', label: 'Scala' },
    { value: 'perl', label: 'Perl' },
    { value: 'haskell', label: 'Haskell' },
    { value: 'elixir', label: 'Elixir' },
    { value: 'r', label: 'R' },
    { value: 'matlab', label: 'MATLAB' },
    { value: 'bash', label: 'Bash' }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'rgba(24, 24, 27, 0.8)',
      borderColor: state.isFocused ? 'rgba(147, 51, 234, 0.5)' : 'rgba(63, 63, 70, 0.5)',
      borderWidth: '1.5px',
      borderRadius: '12px',
      color: '#fff',
      minHeight: '48px',
      boxShadow: state.isFocused ? '0 0 0 3px rgba(147, 51, 234, 0.1)' : 'none',
      transition: 'all 0.2s ease',
      '&:hover': {
        borderColor: 'rgba(147, 51, 234, 0.6)',
      }
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(24, 24, 27, 0.95)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(63, 63, 70, 0.5)',
      borderRadius: '12px',
      padding: '8px',
      marginTop: '8px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
      zIndex: 9999,
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
      fontWeight: '500',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused 
        ? 'rgba(147, 51, 234, 0.15)' 
        : state.isSelected 
        ? 'rgba(147, 51, 234, 0.25)' 
        : 'transparent',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: '8px',
      padding: '12px 16px',
      margin: '4px 0',
      transition: 'all 0.2s ease',
      '&:active': {
        backgroundColor: 'rgba(147, 51, 234, 0.3)',
      }
    }),
    input: (provided) => ({
      ...provided,
      color: '#fff',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'rgba(161, 161, 170, 0.7)',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'rgba(161, 161, 170, 0.7)',
      '&:hover': {
        color: '#9333ea',
      }
    }),
  };

  const [code, setCode] = useState("");

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  async function reviewCode() {
    setResponse("")
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `You are an expert-level software developer, skilled in writing efficient, clean, and advanced code.
I'm sharing a piece of code written in ${selectedOption.value}.
Your job is to deeply review this code and provide the following:

1️⃣ A quality rating: Better, Good, Normal, or Bad.
2️⃣ Detailed suggestions for improvement, including best practices and advanced alternatives.
3️⃣ A clear explanation of what the code does, step by step.
4️⃣ A list of any potential bugs or logical errors, if found.
5️⃣ Identification of syntax errors or runtime errors, if present.
6️⃣ Solutions and recommendations on how to fix each identified issue.

Analyze it like a senior developer reviewing a pull request.

Code: ${code}
`,
      });
      setResponse(response.text)
    } catch (error) {
      setResponse(`## Error\n\nAn error occurred while reviewing your code: ${error.message}\n\nPlease try again.`)
    } finally {
      setLoading(false);
    }
  }

  const handleReview = () => {
    if (code.trim() === "") {
      // Modern toast-like notification instead of alert
      const notification = document.createElement('div');
      notification.className = 'toast-notification';
      notification.textContent = 'Please enter code first';
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add('show');
      }, 10);
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
      }, 3000);
      return;
    }
    reviewCode();
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {/* Left Panel - Code Editor */}
        <div className="editor-panel">
          <div className="editor-header">
            <div className="language-selector">
              <Code2 size={18} className="icon" />
              <Select
                value={selectedOption}
                onChange={(e) => { setSelectedOption(e) }}
                options={options}
                styles={customStyles}
                className="language-select"
                classNamePrefix="select"
                menuPortalTarget={document.body}
                menuPosition="fixed"
              />
            </div>
            <div className="action-buttons">
              <button 
                className="btn-secondary"
                onClick={() => setCode("")}
                disabled={loading}
              >
                Clear
              </button>
              <button 
                onClick={handleReview}
                className="btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="spinner-small"></div>
                    <span>Reviewing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    <span>Review Code</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="editor-wrapper">
            <Editor 
              height="100%" 
              theme='vs-dark' 
              language={selectedOption.value} 
              value={code} 
              onChange={(e) => { setCode(e) }}
              options={{
                fontSize: 14,
                minimap: { enabled: true },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 16, bottom: 16 },
                lineNumbers: 'on',
                renderLineHighlight: 'all',
                cursorBlinking: 'smooth',
                cursorSmoothCaretAnimation: true,
              }}
            />
          </div>
        </div>

        {/* Right Panel - Response */}
        <div className="response-panel">
          <div className="response-header">
            <div className="response-title">
              <Sparkles size={20} className="icon" />
              <h2>AI Review Response</h2>
            </div>
            {response && !loading && (
              <button 
                className="btn-icon"
                onClick={() => setResponse("")}
                aria-label="Clear response"
              >
                ×
              </button>
            )}
          </div>
          <div className="response-content">
            {loading ? (
              <div className="loading-container">
                <RingLoader color="#9333ea" size={60} />
                <p className="loading-text">Analyzing your code...</p>
                <p className="loading-subtext">This may take a few moments</p>
              </div>
            ) : response ? (
              <div className="markdown-content">
                <Markdown>{response}</Markdown>
              </div>
            ) : (
              <div className="empty-state">
                <AlertCircle size={48} className="empty-icon" />
                <h3>No Review Yet</h3>
                <p>Enter your code and click "Review Code" to get AI-powered feedback</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App