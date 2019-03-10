import React from 'react';
import { EventCard } from './components';

export const Events = () => {
  return (
    <div>
      <h2>Events</h2>
      <EventCard
        title="Local Hack Day"
        description={
          "nwHacks is the biggest 24-hour hackathon in Western Canada hosted at the University of British Columbia. This hackathon aims to bring together the brightest talents from schools around the Pacific Northwest region."
        }
        />
    </div>
  );
};
