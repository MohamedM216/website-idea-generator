"use client";

import { useState } from 'react';
import IdeaForm from '@/components/IdeaForm';
import IdeasList from '@/components/IdeasList';

interface Idea {
  _id: string;
  prompt: string;
  sections: string[];
  createdAt: string;
}

export default function Home() {
  const [showIdeas, setShowIdeas] = useState(false);
  const [latestIdea, setLatestIdea] = useState<Idea | null>(null);

  const handleSuccess = (newIdea: Idea) => {
    setLatestIdea(newIdea);
    setShowIdeas(false);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Ship Your Website Idea in Seconds
        </h1>
        
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setShowIdeas(!showIdeas)}
            className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
          >
            {showIdeas ? 'Hide My Ideas' : 'Show My Ideas'}
          </button>
        </div>

        <IdeaForm onSuccess={handleSuccess} />
        
        {showIdeas && <IdeasList />}
        {latestIdea && !showIdeas && (
          <div className="p-6 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-lg font-bold mb-2">{latestIdea.prompt}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(latestIdea.createdAt).toLocaleString()}
            </p>
            <div className="space-y-3">
              {latestIdea.sections.map((section, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-md">
                  {section}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}