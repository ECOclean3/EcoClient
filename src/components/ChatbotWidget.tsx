import React, { useState } from 'react';
import { Bot, X } from 'lucide-react';


const ChatbotWidget: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Button */}
      {!open && (
        <button
          aria-label="Open chat"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setOpen(true)}
        >
          <Bot size={28} />
        </button>
      )}
      {/* Embedded Chatbot Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-[370px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[10000] animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between bg-green-600 text-white px-4 py-3">
            <span className="font-semibold text-lg">EcoClean Assistant</span>
            <button
              aria-label="Close chat"
              className="hover:bg-green-700 rounded-full p-1 transition"
              onClick={() => setOpen(false)}
            >
              <X size={22} />
            </button>
          </div>
          {/* Iframe */}
          <iframe
            src="http://127.0.0.1:5002/"
            title="EcoClean Chatbot"
            className="flex-1 w-full border-0"
            style={{ minHeight: 0 }}
            allow="clipboard-write; clipboard-read"
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
