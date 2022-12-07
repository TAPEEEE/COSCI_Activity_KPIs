import React, { FC, useState } from 'react';
import { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import filtersActivityList from '../../utils/filtersActivityList';
import {
  CompassFilled,
  SafetyCertificateFilled,
  TagFilled,
  DeleteFilled,
} from '@ant-design/icons';
import type {
  ColumnsType,
  FilterValue,
  SorterResult,
} from 'antd/es/table/interface';

import './ActivityTable.scss';
import { useMountEffect } from '../../hooks';
import { useDispatch, useSelector } from 'react-redux';
import { getActivityList } from '../../service';
import { fetchActivityList } from '../../store/activityList/thunk';

interface ActivityPropsType {
  object: {
    _id: string;
    name_event: string;
    detail_event?: string;
    start_date?: string;
    end_date: string;
    posted_timestamp: string;
    event_type: string;
    event_img: string;
    activity_hour: 1;
    event_status: true;
    permissions_type: string;
  };
}

interface ActivityType {
  _id: string;
  name_event: string;
  event_type: string;
  event_img: string;
  event_status: true;
}

const TableCompo: FC<ActivityPropsType> = (props) => {
  const hookData = props;
  const dataformHook = hookData.object;

  console.log(JSON.stringify(dataformHook, undefined, 3));

  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<ActivityType>>({});

  const handleChange: TableProps<ActivityType>['onChange'] = (
    pagination,
    filters,
    sorter,
  ) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<ActivityType>);
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
    filtersActivityList('ล้างตัวกรอง');
    // console.log(activityListData);
  };

  const setCatFilter1 = () => {
    setFilteredInfo({
      filteredValue: filteredInfo.event_type,
      event_type: ['กิจกรรมเลือก'],
    });
    filtersActivityList('ฟิลเตอร์เป็นกิจกรรมเลือก');
  };

  const setCatFilter2 = () => {
    setFilteredInfo({
      filteredValue: filteredInfo.event_type,
      event_type: ['กิจกรรมบังคับ'],
    });
    filtersActivityList('ฟิลเตอร์เป็นกิจกรรมบังคับ');
  };

  const setCatFilter3 = () => {
    setFilteredInfo({
      filteredValue: filteredInfo.event_type,
      event_type: ['กิจกรรมบำเพ็ญประโยชน์'],
    });
    filtersActivityList('ฟิลเตอร์เป็นกิจกรรมบำเพ็ญประโยชน์');
  };

  const columns: ColumnsType<ActivityType> = [
    {
      title: 'รูปภาพกิจกรรม',
      dataIndex: 'event_img',
      key: 'event_img',
      render: (_, record) => <img className="w-2/3" src={record.event_img} />,
    },
    {
      title: 'Name',
      dataIndex: 'name_event',
      key: 'name_event',
    },
    {
      title: 'ประเภทกิจกรรม',
      dataIndex: 'event_type',
      key: 'event_type',

      filters: [
        { text: 'กิจกรรมเลือก', value: 'กิจกรรมเลือก' },
        { text: 'กิจกรรมบังคับ', value: 'กิจกรรมบังคับ' },
        { text: 'กิจกรรมบำเพ็ญประโยชน์', value: 'กิจกรรมบำเพ็ญประโยชน์' },
      ],

      filteredValue: filteredInfo.event_type || null,
      onFilter: (value: string, record) => record.event_type.includes(value),
      ellipsis: true,
    },
    {
      title: 'สถานะ',
      dataIndex: 'event_status',
      key: 'event_status',

      filters: [
        { text: 'ดำเนินการอยู่', value: 'true' },
        { text: 'กิจกรรมเสร็จสิ้น', value: 'false' },
      ],

      render: (_, record) => (
        <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
          {record.event_status.toString()}
        </div>
      ),
      filteredValue: filteredInfo.event_status || null,
      onFilter: (value: string, record) =>
        record.event_status.toString().includes(value),
      ellipsis: true,
    },
    {
      title: 'จัดการ',
      dataIndex: '_id',
      key: '_id',
      align: 'center',
      render: (_, record) => (
        <Space size="small">
          <button
            // onClick={handleClick}
            type="button"
            className="font-Kanit inline-flex items-center rounded-md border border-transparent bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-600"
          >
            แก้ไข
          </button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Button
          icon={<CompassFilled />}
          className="font-Kanit h-10  inline-flex items-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-700 shadow-sm hover:bg-green-700 "
          onClick={setCatFilter1}
        >
          กิจกรรมเลือก
        </Button>
        <Button
          icon={<SafetyCertificateFilled />}
          className="font-Kanit h-10 inline-flex items-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 hover:text-white shadow-sm hover:bg-amber-700 "
          onClick={setCatFilter2}
        >
          กิจกรรมบังคับ
        </Button>
        <Button
          icon={<TagFilled />}
          className="font-Kanit h-10  inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-700 "
          onClick={setCatFilter3}
        >
          กิจกรรมบำเพ็ญประโยชน์
        </Button>

        <Button
          icon={<DeleteFilled />}
          className="font-Kanit h-10  inline-flex items-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-500 hover:text-white"
          onClick={clearAll}
        >
          ล้างตัวกรอง
        </Button>
      </Space>
      <Table
        pagination={{ pageSize: 4 }}
        columns={columns}
        dataSource={dataformHook}
        onChange={handleChange}
      />
    </>
  );
};

export default TableCompo;
