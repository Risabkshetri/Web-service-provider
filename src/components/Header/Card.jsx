import { useState, useRef, useEffect } from 'react';

const HoverCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div className="relative inline-block text-left">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        onMouseEnter={() => setIsVisible(true)}
      >
        Hover Me
      </button>
      {isVisible && (
        <div
          ref={cardRef}
          className="absolute left-0 mt-2 w-56 p-4 bg-pink-100 border border-gray-200 rounded-md shadow-xl"
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={() => setIsVisible(false)}
        >
          <div className="flex justify-between items-center w-full">
            <div className="text-gray-700  text-xl">This is the content that appears on hover.</div>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsVisible(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverCard;
