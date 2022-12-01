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

interface DataType {
  student_id: number;
  name: string;
  event_name: string;
  status: string;
}

const TableCompo: FC = () => {
  const data: DataType[] = [
    {
      student_id: 63130010046,
      name: 'ณัฏฐพล สุวรรโณ',
      event_name: 'ลอยกระทง',
      status: 'รับเรื่อง',
    },
    {
      student_id: 63130010047,
      name: 'ณัฏฐพล สุวรรโณ',
      event_name: 'ลอยกระทง',
      status: 'รับเรื่อง',
    },
    {
      student_id: 63130010048,
      name: 'ณัฏฐพล สุวรรโณ',
      event_name: 'ลอยกระทง',
      status: 'รับเรื่อง',
    },
    {
      student_id: 63130010049,
      name: 'ณัฏฐพล สุวรรโณ',
      event_name: 'ลอยกระทง',
      status: 'รับเรื่อง',
    },
  ];

  const [filteredInfo, setFilteredInfo] = useState<
    Record<string, FilterValue | null>
  >({});
  const [sortedInfo, setSortedInfo] = useState<SorterResult<DataType>>({});

  const handleChange: TableProps<DataType>['onChange'] = (
    pagination,
    filters,
    sorter,
  ) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter as SorterResult<DataType>);
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
    filtersActivityList('ล้างตัวกรอง');
    // console.log(activityListData);
  };

  const setCatFilter1 = () => {
    setFilteredInfo({
      filteredValue: filteredInfo.status,
      status: ['รับเรื่อง'],
    });
    filtersActivityList('ฟิลเตอร์เป็นรับเรื่อง');
  };

  const setCatFilter2 = () => {
    setFilteredInfo({
      filteredValue: filteredInfo.status,
      status: ['ส่งเรื่องไปยังคณะ'],
    });
    filtersActivityList('ฟิลเตอร์เป็นส่งเรื่องไปยังคณะ');
  };

  const setCatFilter3 = () => {
    setFilteredInfo({
      filteredValue: filteredInfo.status,
      status: ['กำลังดำเนินการ'],
    });
    filtersActivityList('ฟิลเตอร์เป็นกำลังดำเนินการ');
  };

  const setCatFilter4 = () => {
    setFilteredInfo({
      filteredValue: filteredInfo.status,
      status: ['เสร็จสิ้น'],
    });
    filtersActivityList('ฟิลเตอร์เป็นเสร็จสิ้น');
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'รหัสประจำตัว',
      dataIndex: 'student_id',
      key: 'student_id',
      width: '20%',
    },
    {
      title: 'ชื่อผู้ยื่นคำร้อง',
      dataIndex: 'name',
      key: 'name',
      width: '25%',
    },
    {
      title: 'ชื่อกิจกรรม',
      dataIndex: 'event_name',
      key: 'event_name',
    },
    {
      title: 'สถานะ',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'รับเรื่อง', value: 'รับเรื่อง' },
        { text: 'กำลังดำเนินการ', value: 'กำลังดำเนินการ' },
        { text: 'ส่งเรื่องไปยังคณะ', value: 'ส่งเรื่องไปยังคณะ' },
        { text: 'เสร็จสิ้น', value: 'เสร็จสิ้น' },
      ],
      render: (_, record) => (
        <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
          {record.status.toString()}
        </div>
      ),
      filteredValue: filteredInfo.status || null,
      onFilter: (value: string, record) => record.status.includes(value),
      ellipsis: true,
    },
    {
      title: 'จัดการ',
      dataIndex: 'key',
      key: 'key',
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
          รับเรื่อง
        </Button>
        <Button
          icon={<SafetyCertificateFilled />}
          className="font-Kanit h-10 inline-flex items-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 hover:text-white shadow-sm hover:bg-amber-700 "
          onClick={setCatFilter3}
        >
          กำลังดำเนินการ
        </Button>
        <Button
          icon={<TagFilled />}
          className="font-Kanit h-10  inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-700 "
          onClick={setCatFilter2}
        >
          ส่งเรื่องไปยังคณะ
        </Button>
        <Button
          icon={<TagFilled />}
          className="font-Kanit h-10  inline-flex items-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 shadow-sm hover:bg-blue-700 "
          onClick={setCatFilter4}
        >
          เสร็จสิ้น
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
        pagination={{ pageSize: 5 }}
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      />
    </>
  );
};

export default TableCompo;
