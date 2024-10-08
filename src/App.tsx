import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ImageGenerationForm } from './components/ImageGenerationForm';
import { GeneratedImages } from './components/GeneratedImages';

function App() {
  return (
    <div className="grid h-screen w-full pl-[56px]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2">
          <ImageGenerationForm />
          <GeneratedImages />
        </main>
      </div>
    </div>
  );
}

export default App;