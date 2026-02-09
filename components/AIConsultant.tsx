
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "What's good? I'm FCG's AI Creative Scout. Got a vision for a music video or fashion film? Tell me your vibe, and let's build a concept together." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are an AI Creative Consultant for FCG Studio, a high-end video production house in Los Angeles specializing in street culture, music videos (Don Toliver, Chase B style), and fashion. 
          Your tone is sleek, cool, professional but with a "street" edge. Use terms like "vibe", "aesthetic", "cinematics", "grading". 
          When someone describes a project, offer creative ideas on lighting (neon, moody, harsh shadows), camera work (fast zooms, handheld, fish-eye), and locations (LA rooftops, underground clubs, desert).
          Keep responses relatively concise and highly visual. Encourage them to book a session with the human FCG team.`,
          temperature: 0.8,
        }
      });

      const text = response.text || "Sorry, the creative flow got blocked. Try again?";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Something went wrong in the studio. Hit us up via email instead!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-4">AI Concept Scout</h2>
        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Brainstorm Your Vision</h3>
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
                    ? 'bg-yellow-400 text-black font-bold rounded-tr-none' 
                    : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700 shadow-lg'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 p-4 rounded-xl rounded-tl-none border border-zinc-700 animate-pulse text-yellow-400 font-bold uppercase tracking-tighter italic">
                Scanning aesthetics...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex gap-4">
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
            className="px-8 py-4 bg-yellow-400 text-black font-black uppercase tracking-tighter rounded-lg hover:bg-white transition-colors"
          >
            Send
          </button>
        </div>
      </div>
      <p className="text-center mt-6 text-zinc-500 text-xs uppercase tracking-widest italic">
        Powered by Gemini AI Technology & FCG Studio Brain
      </p>
    </div>
  );
};

export default AIConsultant;
