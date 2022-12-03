import React, { FC, memo } from 'react';

interface CardProps {
  name_event: string;
  event_type: string;
  event_detail: string;
}

const CardActivity: FC<CardProps> = (props) => {
  const { name_event, event_type, event_detail } = props;

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:scale-105 hover:bg-slate-100">
      <img
        className="w-full"
        src="http://cosci.swu.ac.th/storage/blogs/gqpsSNB3SvyHomnuhcmvX6s2yNDVUicaTzjOSbu0.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name_event}</div>
        <p className="text-gray-700 text-base">{event_detail}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-amber-400 rounded-full px-3 py-1 text-sm font-semibold text-amber-700 mr-2 mb-2">
          {event_type}
        </span>
      </div>
    </div>
  );
};

export default memo(CardActivity);
