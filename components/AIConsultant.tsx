
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

// The 'aistudio' property is already defined on the Window interface in this environment.
// Removing the duplicate declaration and using type casting to access the pre-configured window.aistudio.

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "What's good? I'm FCG's AI Creative Scout. Got a vision for a music video or fashion film? Tell me your vibe, and let's build a concept together." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [needsKey, setNeedsKey] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Create new instance right before the call to ensure it uses the latest injected API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        // Using gemini-3-pro-preview for complex creative reasoning and aesthetic consulting
        model: 'gemini-3-pro-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are an AI Creative Consultant for FCG Studio, a high-end video production house in Los Angeles specializing in street culture, music videos (Don Toliver, Chase B style), and fashion. Your tone is sleek, cool, professional but with a 'street' edge. Use terms like 'vibe', 'aesthetic', 'cinematics', 'grading'. When someone describes a project, offer creative ideas on lighting (neon, moody, harsh shadows), camera work (fast zooms, handheld, fish-eye), and locations (LA rooftops, underground clubs, desert). Keep responses relatively concise and highly visual. Encourage them to book a session with the human FCG team at fcgstudiola@gmail.com.",
          temperature: 0.8,
        }
      });

      // Directly accessing the .text property from GenerateContentResponse as per SDK guidelines.
      const text = response.text;
      
      if (text) {
        setMessages(prev => [...prev, { role: 'model', text }]);
      } else {
        throw new Error("Empty response from studio brain.");
      }
    } catch (error: any) {
      console.error("Studio AI Error:", error);
      
      // Handle cases where the key might be missing, invalid, or restricted in the live environment
      const errorMessage = error?.message?.toLowerCase() || "";
      const isAuthError = errorMessage.includes('401') || 
                          errorMessage.includes('403') || 
                          errorMessage.includes('not found') ||
                          errorMessage.includes('api key') ||
                          errorMessage.includes('apikey');

      // Check for aistudio availability before prompting for key selection
      if (isAuthError && (window as any).aistudio) {
        setNeedsKey(true);
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: "My creative link is currently offline in this environment. To get the brainstorm started, we need to connect a valid API key." 
        }]);
      } else {
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: "The studio feed is lagging right now. Let's try that again, or hit us up at fcgstudiola@gmail.com for the direct line." 
        }]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnectKey = async () => {
    const aistudio = (window as any).aistudio;
    if (aistudio) {
      // Trigger the sanctioned API key selection dialog
      await aistudio.openSelectKey();
      // Assume selection successful and proceed immediately to maintain UX
      setNeedsKey(false);
      setMessages(prev => [...prev, { role: 'model', text: "Aight, we're back online. What was that vision you were describing?" }]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4 italic">AI Concept Scout</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic">Brainstorm Your Vision</h3>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-400/5">
        <div className="h-[500px] overflow-y-auto p-6 space-y-6 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-4 rounded-xl text-sm md:text-base leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-yellow-400 text-black font-bold rounded-tr-none shadow-[0_0_15px_rgba(250,204,21,0.2)]' 
                    : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700 shadow-lg'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 p-4 rounded-xl rounded-tl-none border border-zinc-700 animate-pulse text-yellow-400 font-bold uppercase tracking-tight italic">
                Scanning aesthetics...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex flex-col gap-4">
          {needsKey ? (
            <button 
              onClick={handleConnectKey}
              className="w-full py-4 bg-yellow-400 text-black font-black uppercase tracking-tight rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-key"></i> Connect Creative API Key
            </button>
          ) : (
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Describe your song or brand vibe..."
                className="flex-1 bg-black border border-zinc-800 text-yellow-400 px-6 py-4 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors font-bold uppercase italic text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="px-8 py-4 bg-yellow-400 text-black font-black uppercase tracking-tight rounded-lg hover:bg-white transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center gap-2">
        <p className="text-zinc-500 text-xs uppercase tracking-widest italic">
          Powered by Gemini AI Technology & FCG Studio Brain
        </p>
        <a 
          href="https://ai.google.dev/gemini-api/docs/billing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[10px] text-zinc-700 hover:text-zinc-500 transition-colors uppercase tracking-widest"
        >
          Billing & Usage Info
        </a>
      </div>
    </div>
  );
};

export default AIConsultant;
