import React from 'react';

const LoadingEventCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md animate-pulse">
      <div className="h-48 bg-gray-300" />
      
      <div className="p-5">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-300 rounded-full mr-2" />
            <div className="h-4 bg-gray-300 rounded w-1/2" />
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-300 rounded-full mr-2" />
            <div className="h-4 bg-gray-300 rounded w-2/3" />
          </div>
          
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-300 rounded-full mr-2" />
            <div className="h-4 bg-gray-300 rounded w-3/4" />
          </div>
        </div>
        
        <div className="h-16 bg-gray-300 rounded mb-4" />
        
        <div className="h-10 bg-gray-300 rounded-md" />
      </div>
    </div>
  );
};

export default LoadingEventCard;