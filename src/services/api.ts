import axios from 'axios';
import { EventType } from '../types/event';
import { mockEvents } from '../data/mockEvents';

// In a real application, this would be an actual API call to a backend service
// that handles the scraping. Since we can't deploy a backend in this environment,
// we're simulating the API with mock data.

export const fetchEvents = async (): Promise<EventType[]> => {
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock data
  return mockEvents;
};

// This function would normally send a request to a backend API
// that would handle the email capture and then return the redirect URL
export const captureEmailAndGetRedirect = async (
  email: string, 
  eventId: string
): Promise<string> => {
  // Simulate API request
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // In a real application, we would save the email to a database
  console.log(`Email captured: ${email} for event: ${eventId}`);
  
  // Find the event URL
  const event = mockEvents.find(e => e.id === eventId);
  if (!event) {
    throw new Error('Event not found');
  }
  
  return event.url;
};