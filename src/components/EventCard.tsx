import React, { useState } from 'react';
import { Calendar, MapPin, Clock,} from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { EventType } from '../types/event';
import EmailCapture from './EmailCapture';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: EventType;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  
  const formattedDate = format(parseISO(event.date), 'MMMM d, yyyy');
  
  const handleGetTickets = () => {
    setShowEmailCapture(true);
  };

  return (
    <>
      <motion.div 
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 m-2 rounded-full text-xs font-semibold">
            {event.category}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white font-semibold">{event.price}</p>
          </div>
        </div>
        
        <div className="p-5">
          <h3 className="font-bold text-lg mb-2 line-clamp-2 text-gray-800 h-14">{event.title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2 text-indigo-500" />
              <span className="text-sm">{formattedDate}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2 text-indigo-500" />
              <span className="text-sm">{event.time}</span>
            </div>
            
            <div className="flex items-start text-gray-600">
              <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-indigo-500" />
              <span className="text-sm line-clamp-1">{event.location}</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
          
          <button 
            onClick={handleGetTickets}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
          >
            GET TICKETS
          </button>
        </div>
      </motion.div>
      
      {showEmailCapture && (
        <EmailCapture 
          eventId={event.id}
          eventTitle={event.title}
          onClose={() => setShowEmailCapture(false)}
        />
      )}
    </>
  );
};

export default EventCard;