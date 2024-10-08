import React from 'react';
import { Home, Menu } from 'lucide-react';

interface MainAppProps {
  onFeatureSelect: (feature: string) => void;
}

const MainApp: React.FC<MainAppProps> = ({ onFeatureSelect }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Home className="mr-2" />
        Home
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Menu className="mr-2" />
          Feature Selection
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {['promptGeneration', 'imageGeneration', 'userSelection', 'approvalProcess', 'socialMediaPosting'].map((feature) => (
            <button
              key={feature}
              onClick={() => onFeatureSelect(feature)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              {feature.charAt(0).toUpperCase() + feature.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainApp;