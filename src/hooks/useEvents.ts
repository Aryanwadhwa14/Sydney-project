import { useState, useEffect, useMemo } from 'react';
import { EventType, EventFilters } from '../types/event';
import { fetchEvents } from '../services/api';

export const useEvents = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<EventFilters>({
    search: '',
    category: '',
  });

  // Load events on component mount
  useEffect(() => {
    const getEvents = async () => {
      setIsLoading(true);
      try {
        const data = await fetchEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getEvents();
  }, []);

  // Apply filters to events
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Search filter
      const matchesSearch = filters.search === '' || 
        event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.location.toLowerCase().includes(filters.search.toLowerCase());
      
      // Category filter
      const matchesCategory = filters.category === '' || event.category === filters.category;
      
      return matchesSearch && matchesCategory;
    });
  }, [events, filters]);

  return {
    events: filteredEvents,
    isLoading,
    filters,
    setFilters,
  };
};