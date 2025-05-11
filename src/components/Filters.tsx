import React from 'react';
import { Search } from 'lucide-react';
import { EventFilters } from '../types/event';
import { eventCategories } from '../data/mockEvents';
import { motion } from 'framer-motion';

interface FiltersProps {
  filters: EventFilters;
  setFilters: React.Dispatch<React.SetStateAction<EventFilters>>;
}

const Filters: React.FC<FiltersProps> = ({ filters, setFilters }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({ ...prev, search: e.target.value }));
  };

  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({ 
      ...prev, 
      category: category === 'All Categories' ? '' : category 
    }));
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search events, venues, or keywords..."
            className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={filters.search}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {eventCategories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
              (category === 'All Categories' && filters.category === '') || 
              filters.category === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Filters;