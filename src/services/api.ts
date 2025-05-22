import { EventType } from '../types/event';
import { mockEvents } from '../data/mockEvents';

export const fetchEvents = async (): Promise<EventType[]> => { // major api function
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock data
  return mockEvents;
};

export const captureEmailAndGetRedirect = async (
  email: string, 
  eventId: string
): Promise<string> => {
  // Simulate API request
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // email further would be save in a database or sent to an API
  console.log(`Email captured: ${email} for event: ${eventId}`);
  
  // Find the event URL
  const event = mockEvents.find(e => e.id === eventId);
  if (!event) {
    throw new Error('Event not found');
  }
  
  return event.url;
};