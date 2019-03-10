import React from 'react';

export const EventCard = ({
  thumbnail,
  title,
  description,
  link
}) => {
  return (
    <div className="card">
      <div className="flex dir-col jc-center">
        <h2 className="sans">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
};
