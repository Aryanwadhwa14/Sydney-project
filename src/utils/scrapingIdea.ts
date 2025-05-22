import axios from 'axios';
import * as cheerio from 'cheerio';
import { EventType } from '../types/event';

export const scrapeEventbriteEvents = async (): Promise<EventType[]> => {
  try {
    const url = 'https://www.eventbrite.com.au/d/australia--sydney/events/';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const events: EventType[] = [];

    // Example selector - would need to be updated based on Eventbrite's actual DOM structure
    $('.event-card').each((i, element) => {
      const id = $(element).attr('data-id') || `event-${i}`;
      const title = $(element).find('.event-title').text().trim();
      const dateString = $(element).find('.event-date').text().trim();
      const timeString = $(element).find('.event-time').text().trim();
      const location = $(element).find('.event-location').text().trim();
      const description = $(element).find('.event-description').text().trim();
      const imageUrl = $(element).find('.event-image').attr('src') || '';
      const price = $(element).find('.event-price').text().trim() || 'Free';
      const category = $(element).find('.event-category').text().trim() || 'General';
      const url = $(element).find('a.event-link').attr('href') || '';

      // Convert date string to ISO format (simplified example)
      const date = new Date(dateString).toISOString().split('T')[0];

      events.push({
        id,
        title,
        date,
        time: timeString,
        location,
        description,
        imageUrl,
        price,
        category,
        url,
      });
    });

    return events;
  } catch (error) {
    console.error('Error scraping Eventbrite:', error);
    return [];
  }
};

export const scheduleEventScraping = () => {
  console.log('Event scraping scheduled');
};