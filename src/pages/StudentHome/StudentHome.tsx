import * as React from 'react';
import CardActivity from '../../components/user/CardActivity';
import UserNavbar from '../../components/user/UserNavbar';
import '../LoginPages/LoginPages.scss';
type StudentHomeProps = {
  //
};

const data = [
  {
    name_event: 'กิจกรรม 1',
    event_type: 'กิจกรรมเลือก',
    event_detail:
      'เตรียมพบกับการถ่ายทอดสด การพูดคุยเพื่อสร้างเสริมสุขภาวะนวัตกรรมที่ดี ในหัวข้อ "Ready Warm up Workout! ก่อนไปเวิร์คเอาท์ เราขอวอร์มอัพ" กับวิทยากรที่จะมาสร้างแรงบันดาลในการพัฒนาร่างกายอย่างมีประสิทธิภาพกับ พี่กิ๊ฟท์-ปาริชา, พี่บอย-ปิยะ, และ ครูจ๊อด-เอกราช และพบกับผู้ร่วมรายการสุดพิเศษ ที่จะมาอัพเกรดการสร้างเสริมสุขภาพอย่างเป็นกันเอง กับ พี่น้ำตาล-ชลิตา และ พี่แฟ้ม-พรกวิษย์ สำหรับนิสิตวิทยาลัยนวัตกรรมสื่อสารสังคมที่รับชม จะได้รับตราประทับกิจกรรมในหมวดเลือก!',
  },
  {
    name_event: 'กิจกรรม 2',
    event_type: 'กิจกรรมเลือก',
    event_detail:
      'เตรียมพบกับการถ่ายทอดสด การพูดคุยเพื่อสร้างเสริมสุขภาวะนวัตกรรมที่ดี ในหัวข้อ "Ready Warm up Workout! ก่อนไปเวิร์คเอาท์ เราขอวอร์มอัพ" กับวิทยากรที่จะมาสร้างแรงบันดาลในการพัฒนาร่างกายอย่างมีประสิทธิภาพกับ พี่กิ๊ฟท์-ปาริชา, พี่บอย-ปิยะ, และ ครูจ๊อด-เอกราช และพบกับผู้ร่วมรายการสุดพิเศษ ที่จะมาอัพเกรดการสร้างเสริมสุขภาพอย่างเป็นกันเอง กับ พี่น้ำตาล-ชลิตา และ พี่แฟ้ม-พรกวิษย์ สำหรับนิสิตวิทยาลัยนวัตกรรมสื่อสารสังคมที่รับชม จะได้รับตราประทับกิจกรรมในหมวดเลือก!',
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
  {
    name_event: 'กิจกรรม 5',
    event_type: 'กิจกรรมเลือก',
    event_detail:
      'Irure ut in ex nostrud. Non eiusmod reprehenderit sit enim ea. Mollit dolor enim laborum enim. Consectetur laboris fugiat aliqua labore amet esse amet amet. Ullamco incididunt sit est dolor labore magna proident commodo excepteur excepteur.',
  },
];

const StudentHome: React.FC<any> = () => {
  return (
    <>
      <body className="w-screen h-screen bgimg overflow-auto">
        <UserNavbar />
        <div className="my-auto mt-28">
          <div className="flex justify-center">
            <div className="mx-3">
              <div className="mx-auto max-w-6xl  bg-white my-8 shadow-md rounded-lg">
                <div className="bg-[#1f2937] rounded-t-lg">
                  <div className="flex justify-between ">
                    <h1 className="font-Kanit text-white font-medium text-xl mx-4 my-4 pl-2">
                      กิจกรรมนิสิตทั้งหมด
                    </h1>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-6 py-6 sm:px-6 lg:px-8 mt-8">
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
        </div>
      </body>
    </>
  );
};

export default StudentHome;
