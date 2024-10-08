import React, { useState } from 'react';
import { Edit3, Calculator, Sliders, Edit, CheckSquare } from 'lucide-react';

interface PromptGenerationProps {
  onPromptsGenerated: (prompts: string[]) => void;
}

const PromptGeneration: React.FC<PromptGenerationProps> = ({ onPromptsGenerated }) => {
  const [equation, setEquation] = useState('');
  const [variables, setVariables] = useState<{ [key: string]: string }>({});
  const [generatedPrompts, setGeneratedPrompts] = useState<string[]>([]);

  const handleGeneratePrompts = () => {
    // Simulate prompt generation based on equation and variables
    const newPrompts = [
      `Generate an image of ${equation} with ${Object.values(variables).join(', ')}`,
      `Create a visual representation of ${equation}`,
      `Illustrate the concept of ${equation} using ${Object.values(variables).join(', ')}`,
    ];
    setGeneratedPrompts(newPrompts);
  };

  const handleSelectPrompts = () => {
    onPromptsGenerated(generatedPrompts);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Edit3 className="mr-2" />
        Prompt Generation
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Calculator className="mr-2" />
          Equation Generation
        </h3>
        <input
          type="text"
          value={equation}
          onChange={(e) => setEquation(e.target.value)}
          placeholder="Enter equation (e.g., y = mx + b)"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Sliders className="mr-2" />
          Variable Substitution
        </h3>
        {['m', 'x', 'b'].map((variable) => (
          <input
            key={variable}
            type="text"
            value={variables[variable] || ''}
            onChange={(e) => setVariables({ ...variables, [variable]: e.target.value })}
            placeholder={`Value for ${variable}`}
            className="w-full px-3 py-2 border rounded-md mb-2"
          />
        ))}
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Edit className="mr-2" />
          Generate Prompts
        </h3>
        <button
          onClick={handleGeneratePrompts}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
          Generate Prompts
        </button>
      </div>
      {generatedPrompts.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <CheckSquare className="mr-2" />
            Select Prompts
          </h3>
          <ul className="list-disc pl-5 mb-4">
            {generatedPrompts.map((prompt, index) => (
              <li key={index}>{prompt}</li>
            ))}
          </ul>
          <button
            onClick={handleSelectPrompts}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Use Selected Prompts
          </button>
        </div>
      )}
    </div>
  );
};

export default PromptGeneration;