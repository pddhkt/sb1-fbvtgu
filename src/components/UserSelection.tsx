import React from 'react';
import { Grid, CheckCircle } from 'lucide-react';

interface UserSelectionProps {
  images: string[];
  onImageSelected: (image: string) => void;
}

const UserSelection: React.FC<UserSelectionProps> = ({ images, onImageSelected }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <CheckCircle className="mr-2" />
        User Selection
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Grid className="mr-2" />
          Select an Image
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img src={image} alt={`Generated image ${index + 1}`} className="w-full h-auto rounded-md" />
              <button
                onClick={() => onImageSelected(image)}
                className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <CheckCircle size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSelection;