import React, { useState } from 'react';
import { ThumbsUp, Database } from 'lucide-react';

interface ApprovalProcessProps {
  selectedImage: string;
}

const ApprovalProcess: React.FC<ApprovalProcessProps> = ({ selectedImage }) => {
  const [isApproved, setIsApproved] = useState(false);

  const handleApprove = () => {
    setIsApproved(true);
    // Here you would typically send the approval to your backend
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <ThumbsUp className="mr-2" />
        Approval Process
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Database className="mr-2" />
          Selected Image
        </h3>
        {selectedImage ? (
          <div>
            <img src={selectedImage} alt="Selected image" className="w-full max-w-md h-auto rounded-md mb-4" />
            {!isApproved ? (
              <button
                onClick={handleApprove}
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
              >
                Approve Image
              </button>
            ) : (
              <p className="text-green-500 font-semibold">Image Approved</p>
            )}
          </div>
        ) : (
          <p>No image selected for approval.</p>
        )}
      </div>
    </div>
  );
};

export default ApprovalProcess;