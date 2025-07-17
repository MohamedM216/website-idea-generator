'use client';

import { useState } from 'react';
import { submitIdea } from '@/lib/api';

export default function IdeaForm({ onSuccess }: { onSuccess: (idea: any) => void }) {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('Please enter a website idea');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const newIdea = await submitIdea(prompt);
      setPrompt('');
      onSuccess(newIdea);
    } catch (err) {
      setError('Failed to submit idea. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md"> {/* Removed max-w-md */}
      <h2 className="text-xl font-semibold mb-4">Describe your website idea</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-3 py-2 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., A stunning landing page for my bakery business"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 
            transition-all duration-300 ease-in-out cursor-pointer
            ${isLoading 
              ? 'bg-purple-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-[1.01]'
            }`}
        >
          {isLoading ? (
            'Working Magic...'
          ) : (
            <>
              <span className="inline-block">✨ Start Magic ✨</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}