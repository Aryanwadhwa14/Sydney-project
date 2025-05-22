import axios from 'axios';
import cheerio from 'cheerio';

export const scrapeSydneyEvents = async (): Promise<any[]> => {
  const url = 'https://www.eventbrite.com.au/d/australia--sydney/events/';

  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const events: any[] = [];

    $('.search-event-card-wrapper').each((_, element) => {
      const title = $(element).find('.eds-event-card-content__title').text().trim();
      const date = $(element).find('.eds-event-card-content__sub-title').text().trim();
      const timeString = $(element).find('.eds-event-card-content__sub').text().trim();
      const location = $(element).find('.card-text--truncated__one').text().trim();
      const description = $(element).find('.eds-event-card-content__content').text().trim();
      const imageUrl = $(element).find('.eds-event-card-content__image').attr('src') || '';
      const price = $(element).find('.eds-event-card-content__sub').text().trim();
      const category = 'Event'; // Eventbrite doesn't provide categories directly on the card
      const eventUrl = $(element).find('a').attr('href') || '';

      events.push({
        title,
        date,
        time: timeString,
        location,
        description,
        imageUrl,
        price,
        category,
        url: eventUrl.startsWith('http') ? eventUrl : `https://www.eventbrite.com.au${eventUrl}`,
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





