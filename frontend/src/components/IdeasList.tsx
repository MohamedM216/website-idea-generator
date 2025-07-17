'use client';

import { useEffect, useState } from 'react';
import { fetchIdeas } from '@/lib/api';

interface Idea {
  _id: string;
  prompt: string;
  sections: string[];
  createdAt: string;
}

export default function IdeasList() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadIdeas = async () => {
    setIsLoading(true);
    try {
      const data = await fetchIdeas();
      setIdeas(data);
    } catch (err) {
      setError('Failed to load ideas. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadIdeas();
  }, []);

  if (isLoading) {
    return <div className="text-center py-8">Loading ideas...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  if (ideas.length === 0) {
    return <div className="text-center py-8">No ideas generated yet.</div>;
  }

  return (
    <div className="space-y-6">
      {ideas.map((idea) => (
        <div key={idea._id} className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-medium mb-2">{idea.prompt}</h3>
          <p className="text-sm text-gray-500 mb-4">
            {new Date(idea.createdAt).toLocaleString()}
          </p>
          <div className="space-y-3">
            {idea.sections.map((section, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-md">
                {section}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}