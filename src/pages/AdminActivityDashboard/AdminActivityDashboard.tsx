import React, { useEffect, useState, memo, FC } from 'react';
import AdminActivityTable from '../../components/AdminActivityTable';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getActivityList } from '../../store/activityList/selector';
import { fetchActivityList } from '../../store/activityList/thunk';
import { useMountEffect } from '../../hooks';

type AdminActivityDashboardProps = {
  //
};

const AdminActivityDashboard: FC = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const activityListData = useSelector(getActivityList);

  useMountEffect(() => {
    dispatch(fetchActivityList());
  });

  function handleClick() {
    navigate('/admin-add-activity');
  }

  return (
    <>
      <body className="h-full bg-gray-100 font-Kanit">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 font-Kanit">
            <div className="lg:flex lg:justify-between">
              <h1 className="text-[28px] font-medium tracking-tight text-gray-900">
                จัดการกิจกรรม
              </h1>
            </div>
          </div>
        </header>

        <div className="mx-3">
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white my-8 shadow-md rounded-lg">
            <div className="flex justify-between">
              <h1 className="font-Kanit font-medium text-2xl mx-5 my-5">
                กิจกรรมล่าสุด
              </h1>
              <button
                onClick={handleClick}
                type="button"
                className="font-Kanit mt-4 mb-4 mr-4 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
              >
                เพิ่มกิจกรรม
              </button>
            </div>

            <div className="mx-5 my-5">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden rounded-lg">
                      <table className="min-w-full text-center">
                        <thead className="border-b bg-gray-800">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              รูปภาพ
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              ชื่อกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              ประเภทกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              เวลาเริ่มกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              เวลาจบกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              จัดการกิจกรรม
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {loading
                            ? 'Loading...'
                            : error
                            ? error.message
                            : activity.users.kpi.map((item) => <h3>{item.name}</h3>)} */}

                          {activityListData.map((item) => (
                            <AdminActivityTable
                              name_event={item.name_event}
                              start_date={item.start_date}
                              end_date={item.end_date}
                              event_type={item.event_type}
                              event_img={item.event_img}
                              posted_timestamp={''}
                              event_status={true}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-white my-8 shadow-md rounded-lg">
            <div className="flex justify-between">
              <h1 className="font-Kanit font-medium text-2xl mx-5 my-5">
                กิจกรรมล่าสุด
              </h1>
              <button
                onClick={handleClick}
                type="button"
                className="font-Kanit mt-4 mb-4 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
              >
                เพิ่มกิจกรรม
              </button>
            </div>

            <div className="mx-5 my-5">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8 ">
                    <div className="overflow-hidden rounded-lg">
                      <table className="min-w-full text-center">
                        <thead className="border-b bg-gray-800">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              รูปภาพ
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              ชื่อกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              ประเภทกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              เวลาเริ่มกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              เวลาจบกิจกรรม
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-white px-6 py-4"
                            >
                              จัดการกิจกรรม
                            </th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28">
          <Footer />
        </div>
      </body>
    </>
  );
};

export default memo(AdminActivityDashboard);
