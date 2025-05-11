import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsGrid from './components/EventsGrid';
import Filters from './components/Filters';
import Footer from './components/Footer';
import { useEvents } from './hooks/useEvents';

function App() {
  const { events, isLoading, filters, setFilters } = useEvents();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="events" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Events in Sydney</h2>
              <p className="text-gray-600">
                Discover and book the best events Sydney has to offer
              </p>
            </div>
            
            <Filters 
              filters={filters}
              setFilters={setFilters}
            />
            
            <EventsGrid 
              events={events}
              isLoading={isLoading}
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;