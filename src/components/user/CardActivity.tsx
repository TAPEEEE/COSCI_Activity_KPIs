import React, { FC, memo } from 'react';

interface CardProps {
  name_event: string;
  event_type: string;
  event_detail: string;
}

const CardActivity: FC<CardProps> = (props) => {
  const { name_event, event_type, event_detail } = props;

  return (
    <div className="mb-5 max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-100 hover:scale-105 hover:bg-slate-100 font-Kanit">
      <img
        className="w-full"
        src="http://cosci.swu.ac.th/storage/blogs/gqpsSNB3SvyHomnuhcmvX6s2yNDVUicaTzjOSbu0.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name_event}</div>

        <p className="text-gray-700 text-small">{event_detail}</p>
        <span className="mt-2 inline-block bg-amber-400 rounded-full px-3 py-1 text-sm font-semibold text-amber-700 mr-2 mb-2">
          {event_type}
        </span>
      </div>
      <div className=" mb-2 px-6 pt-4 pb-2">
        <button
          type="button"
          className="mr-2 inline-flex items-center rounded-md border border-transparent bg-[#006ea1] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#003249] focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
        >
          ลงทะเบียนเข้าร่วมกิจกรรม
        </button>
      </div>
    </div>
  );
};

export default memo(CardActivity);
