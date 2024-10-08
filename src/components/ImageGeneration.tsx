import React, { useState } from 'react';
import { Image, Grid } from 'lucide-react';

interface ImageGenerationProps {
  prompts: string[];
  onImagesGenerated: (images: string[]) => void;
}

const ImageGeneration: React.FC<ImageGenerationProps> = ({ prompts, onImagesGenerated }) => {
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const handleGenerateImages = () => {
    // Simulate image generation based on prompts
    const newImages = prompts.map((_, index) => `https://source.unsplash.com/random/400x400?sig=${index}`);
    setGeneratedImages(newImages);
    onImagesGenerated(newImages);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Image className="mr-2" />
        Image Generation
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Selected Prompts:</h3>
        <ul className="list-disc pl-5 mb-4">
          {prompts.map((prompt, index) => (
            <li key={index}>{prompt}</li>
          ))}
        </ul>
        <button
          onClick={handleGenerateImages}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Generate Images
        </button>
      </div>
      {generatedImages.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Grid className="mr-2" />
            Generated Images
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {generatedImages.map((image, index) => (
              <img key={index} src={image} alt={`Generated image ${index + 1}`} className="w-full h-auto rounded-md" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGeneration;