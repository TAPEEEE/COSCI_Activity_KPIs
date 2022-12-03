import * as React from 'react';
import CardActivity from '../../components/user/CardActivity';

type StudentHomeProps = {
  //
};

const data = [
  {
    name_event: 'กิจกรรม 1',
    event_type: 'กิจกรรมเลือก',
    event_detail:
      'Irure ut in ex nostrud. Non eiusmod reprehenderit sit enim ea. Mollit dolor enim laborum enim. Consectetur laboris fugiat aliqua labore amet esse amet amet. Ullamco incididunt sit est dolor labore magna proident commodo excepteur excepteur.',
  },
  {
    name_event: 'กิจกรรม 2',
    event_type: 'กิจกรรมเลือก',
    event_detail:
      'Irure ut in ex nostrud. Non eiusmod reprehenderit sit enim ea. Mollit dolor enim laborum enim. Consectetur laboris fugiat aliqua labore amet esse amet amet. Ullamco incididunt sit est dolor labore magna proident commodo excepteur excepteur.',
  },
  {
    name_event: 'กิจกรรม 3',
    event_type: 'กิจกรรมเลือก',
    event_detail:
      'Irure ut in ex nostrud. Non eiusmod reprehenderit sit enim ea. Mollit dolor enim laborum enim. Consectetur laboris fugiat aliqua labore amet esse amet amet. Ullamco incididunt sit est dolor labore magna proident commodo excepteur excepteur.',
  },
  {
    name_event: 'กิจกรรม 4',
    event_type: 'กิจกรรมเลือก',
    event_detail:
      'Irure ut in ex nostrud. Non eiusmod reprehenderit sit enim ea. Mollit dolor enim laborum enim. Consectetur laboris fugiat aliqua labore amet esse amet amet. Ullamco incididunt sit est dolor labore magna proident commodo excepteur excepteur.',
  },
];

const StudentHome: React.FC<any> = () => {
  return (
    <div className="bg-gray-300 font-Kanit">
      <div className="mx-auto mt-24">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5">
            {data.map((item) => (
              <CardActivity
                name_event={item.name_event}
                event_type={item.event_type}
                event_detail={item.event_detail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
