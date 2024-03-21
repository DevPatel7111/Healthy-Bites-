import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

const SimpleChatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="chatbot-container"> {/* Added container class */}
      {chatOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75"> {/* Modal with Tailwind classes */}
          <div className="w-full max-w-sm bg-white rounded shadow-md"> {/* Modal content with Tailwind classes */}
            <button
              className="absolute top-0 right-0 m-4 text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleChat}
              aria-label="Close Chat"
            >
              <svg
    className="h-8 bg-red-500 text-white w-8"
    viewBox="0 0 20 20"
    fill="currentColor"
>
    <path
        fillRule="evenodd"
        d="M4.707 3.307a1 1 0 00-1.414 0L0 6.014l4.293 4.293a1 1 0 001.414-1.414L2.307 5.307l4.293-4.293a1 1 0 000-1.414zM15.293 6.693a1 1 0 000 1.414L17.59 8.707l-4.293 4.293a1 1 0 001.414 1.414L19.693 13.307l-4.293-4.293a1 1 0 00-1.414-1.414z"
        clipRule="evenodd"
    />
</svg>

            </button>
            <ChatBot
              steps={[
                {
                  id: '1',
                  message: 'Hi there! I am your personal assistant, Sam. What is your name?',
                  trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: "Hi {previousValue}, how may I help you?",
                    trigger: '4',
                },
                {
                    id: '4',
                    user: true,
                    trigger: '5',
                },
                {
                    id: '5',
                    message: "Please email us and we will try to assist you as soon as possible.",
                    end: true
                }
               
              ]}
            />
          </div>
        </div>
      )}
      <button
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={toggleChat}
        aria-label={chatOpen ? 'Close Chat' : 'Open Chat'}
      >
        {chatOpen ? 'Close Chat' : 'Open Chat'}
      </button>
    </div>
  );
};

export default SimpleChatbot;