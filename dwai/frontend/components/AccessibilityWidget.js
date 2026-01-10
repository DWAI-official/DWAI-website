"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accessibility,
  X,
  Type,
  Eye,
  MousePointer2,
  Zap,
  RefreshCw,
  Palette,
  Link as LinkIcon,
  Minus,
  Plus,
} from "lucide-react";

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    contrast: "normal", // normal, high, grayscale
    fontSize: 100, // percentage
    linksHighlight: false,
    dyslexiaFont: false,
    cursor: "default", // default, large
    animations: true,
  });

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;

    // 1. Font Size (Scaling Root)
    root.style.fontSize = `${settings.fontSize}%`;

    // 2. Contrast Classes
    root.classList.remove("a11y-contrast-high", "a11y-grayscale");
    if (settings.contrast === "high") root.classList.add("a11y-contrast-high");
    if (settings.contrast === "grayscale") root.classList.add("a11y-grayscale");

    // 3. Links Highlight
    if (settings.linksHighlight) root.classList.add("a11y-links-highlight");
    else root.classList.remove("a11y-links-highlight");

    // 4. Dyslexia Font
    if (settings.dyslexiaFont) root.classList.add("a11y-dyslexia-font");
    else root.classList.remove("a11y-dyslexia-font");

    // 5. Cursor
    if (settings.cursor === "large") root.classList.add("a11y-cursor-large");
    else root.classList.remove("a11y-cursor-large");

    // 6. Animations (Reduce Motion)
    if (!settings.animations) root.classList.add("a11y-reduce-motion");
    else root.classList.remove("a11y-reduce-motion");

  }, [settings]);

  const resetSettings = () => {
    setSettings({
      contrast: "normal",
      fontSize: 100,
      linksHighlight: false,
      dyslexiaFont: false,
      cursor: "default",
      animations: true,
    });
  };

  return (
    <>
      {/* Global Styles Injection for A11y Overrides */}
      <style jsx global>{`
        /* High Contrast Mode (Yellow on Black) */
        html.a11y-contrast-high body,
        html.a11y-contrast-high main,
        html.a11y-contrast-high section,
        html.a11y-contrast-high div,
        html.a11y-contrast-high p,
        html.a11y-contrast-high h1, html.a11y-contrast-high h2, html.a11y-contrast-high h3,
        html.a11y-contrast-high span {
          background-color: #000 !important;
          color: #ffff00 !important;
          border-color: #ffff00 !important;
          box-shadow: none !important;
        }
        html.a11y-contrast-high img {
          filter: grayscale(100%) contrast(120%);
        }
        html.a11y-contrast-high a {
          color: #00ffff !important;
          text-decoration: underline !important;
        }
        html.a11y-contrast-high button {
          background-color: #ffff00 !important;
          color: #000 !important;
          border: 2px solid #fff !important;
        }

        /* Grayscale */
        html.a11y-grayscale {
          filter: grayscale(100%);
        }

        /* Dyslexia Font */
        html.a11y-dyslexia-font body {
          font-family: 'Comic Sans MS', 'Chalkboard SE', 'Verdana', sans-serif !important;
          line-height: 1.8 !important;
          letter-spacing: 0.05em !important;
        }

        /* Highlight Links */
        html.a11y-links-highlight a {
          background-color: #ffeb3b !important;
          color: #000 !important;
          text-decoration: underline !important;
          font-weight: bold !important;
          padding: 0 4px;
        }

        /* Large Cursor */
        html.a11y-cursor-large, html.a11y-cursor-large * {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="black" stroke="white" stroke-width="2"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>') 0 0, auto !important;
        }

        /* Reduce Motion */
        html.a11y-reduce-motion * {
          animation: none !important;
          transition: none !important;
          scroll-behavior: auto !important;
        }
      `}</style>

      <div className="fixed bottom-6 left-6 z-[9999] font-sans">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 left-0 w-80 bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-purple-800 text-white p-4 flex justify-between items-center">
                <h3 className="font-bold flex items-center gap-2">
                  <Accessibility size={20} /> Accessibility
                </h3>
                <button
                  onClick={resetSettings}
                  className="text-xs bg-purple-700 hover:bg-purple-600 px-2 py-1 rounded flex items-center gap-1 transition"
                  aria-label="Reset settings"
                >
                  <RefreshCw size={12} /> Reset
                </button>
              </div>

              {/* Controls */}
              <div className="p-5 space-y-6 max-h-[60vh] overflow-y-auto">
                
                {/* 1. Text Size */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Type size={16} /> Text Size
                  </label>
                  <div className="flex items-center justify-between bg-gray-100 rounded-lg p-1">
                    <button 
                      onClick={() => setSettings(s => ({ ...s, fontSize: Math.max(90, s.fontSize - 10) }))}
                      className="p-2 hover:bg-white rounded-md transition"
                      aria-label="Decrease font size"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-bold text-purple-800">{settings.fontSize}%</span>
                    <button 
                      onClick={() => setSettings(s => ({ ...s, fontSize: Math.min(150, s.fontSize + 10) }))}
                      className="p-2 hover:bg-white rounded-md transition"
                      aria-label="Increase font size"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* 2. Contrast */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Palette size={16} /> Contrast
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['normal', 'high', 'grayscale'].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setSettings(s => ({ ...s, contrast: mode }))}
                        className={`text-xs py-2 rounded-md border capitalize transition ${
                          settings.contrast === mode 
                            ? 'bg-purple-600 text-white border-purple-600' 
                            : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Toggles Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Links */}
                  <button
                    onClick={() => setSettings(s => ({ ...s, linksHighlight: !s.linksHighlight }))}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-2 ${
                      settings.linksHighlight ? 'bg-purple-50 border-purple-500' : 'bg-white border-gray-200'
                    }`}
                  >
                    <LinkIcon size={20} className={settings.linksHighlight ? 'text-purple-600' : 'text-gray-400'} />
                    <span className="text-xs font-semibold text-gray-800">Highlight Links</span>
                  </button>

                  {/* Dyslexia Font */}
                  <button
                    onClick={() => setSettings(s => ({ ...s, dyslexiaFont: !s.dyslexiaFont }))}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-2 ${
                      settings.dyslexiaFont ? 'bg-purple-50 border-purple-500' : 'bg-white border-gray-200'
                    }`}
                  >
                    <Eye size={20} className={settings.dyslexiaFont ? 'text-purple-600' : 'text-gray-400'} />
                    <span className="text-xs font-semibold text-gray-800">Readable Font</span>
                  </button>

                  {/* Cursor */}
                  <button
                    onClick={() => setSettings(s => ({ ...s, cursor: s.cursor === 'default' ? 'large' : 'default' }))}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-2 ${
                      settings.cursor === 'large' ? 'bg-purple-50 border-purple-500' : 'bg-white border-gray-200'
                    }`}
                  >
                    <MousePointer2 size={20} className={settings.cursor === 'large' ? 'text-purple-600' : 'text-gray-400'} />
                    <span className="text-xs font-semibold text-gray-800">Big Cursor</span>
                  </button>

                  {/* Animations */}
                  <button
                    onClick={() => setSettings(s => ({ ...s, animations: !s.animations }))}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-2 ${
                      !settings.animations ? 'bg-purple-50 border-purple-500' : 'bg-white border-gray-200'
                    }`}
                  >
                    <Zap size={20} className={!settings.animations ? 'text-purple-600' : 'text-gray-400'} />
                    <span className="text-xs font-semibold text-gray-800">Stop Motion</span>
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-purple-800 hover:bg-purple-900 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-300"
          aria-label="Open accessibility options"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Accessibility size={28} />}
        </button>
      </div>
    </>
  );
}