"use client";

import { useState } from 'react';
import IdeaForm from '@/components/IdeaForm';
import IdeasList from '@/components/IdeasList';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSuccess = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Website Idea Generator
        </h1>
        <IdeaForm onSuccess={handleSuccess} />
        <IdeasList key={refreshKey} />
      </div>
    </main>
  );
}