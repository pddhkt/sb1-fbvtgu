import React, { useState } from 'react';
import { Send, Instagram } from 'lucide-react';

interface SocialMediaPostingProps {
  selectedImage: string;
}

const SocialMediaPosting: React.FC<SocialMediaPostingProps> = ({ selectedImage }) => {
  const [caption, setCaption] = useState('');
  const [isPosted, setIsPosted] = useState(false);

  const handlePost = () => {
    // Here you would typically send the post to Instagram API
    setIsPosted(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Send className="mr-2" />
        Social Media Posting
      </h2>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Instagram className="mr-2" />
          Post to Instagram
        </h3>
        {selectedImage ? (
          <div>
            <img src={selectedImage} alt="Selected image" className="w-full max-w-md h-auto rounded-md mb-4" />
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Write a caption..."
              className="w-full px-3 py-2 border rounded-md mb-4"
              rows={4}
            />
            {!isPosted ? (
              <button
                onClick={handlePost}
                className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-colors"
              >
                Post to Instagram
              </button>
            ) : (
              <p className="text-green-500 font-semibold">Posted to Instagram</p>
            )}
          </div>
        ) : (
          <p>No image selected for posting.</p>
        )}
      </div>
    </div>
  );
};

export default SocialMediaPosting;