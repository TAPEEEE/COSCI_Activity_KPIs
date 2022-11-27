import React, { FC, useState } from 'react';
import { TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import filtersActivityList from '../utils/filtersActivityList';
import {
  SearchOutlined,
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

import './Table.scss';

interface DataType {
  key: string;
  activityimage: string;
  name: string;
  activitycategories: string[];
}
// import { getActivityList } from '../store/activityList/selector';
// import { useSelector } from 'react-redux';

// const activityListData = useSelector(getActivityList);

const TableCompo: FC = () => {
  const data: DataType[] = [
    {
      key: '1',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'ลอยกระทง',
      activitycategories: ['กิจกรรมบำเพ็ญประโยชน์'],
    },
    {
      key: '2',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'Cosci Open House',
      activitycategories: ['กิจกรรมเลือก'],
    },
    {
      key: '3',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'ลอยกระทง',
      activitycategories: ['กิจกรรมเลือก'],
    },
    {
      key: '4',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'COSCI Workshop',
      activitycategories: ['กิจกรรมบังคับ'],
    },
    {
      key: '5',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'ลอยกระทง',
      activitycategories: ['กิจกรรมบังคับ'],
    },
    {
      key: '6',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'ลอยกระทง',
      activitycategories: ['กิจกรรมบำเพ็ญประโยชน์'],
    },
    {
      key: '7',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'Cosci Open House',
      activitycategories: ['กิจกรรมเลือก'],
    },
    {
      key: '8',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'ลอยกระทง',
      activitycategories: ['กิจกรรมเลือก'],
    },
    {
      key: '9',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'COSCI Workshop',
      activitycategories: ['กิจกรรมบังคับ'],
    },
    {
      key: '10',
      activityimage:
        'https://media.discordapp.net/attachments/789137436562685973/1037022084360048670/Component_12.png',
      name: 'ลอยกระทง',
      activitycategories: ['กิจกรรมบังคับ'],
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
      filteredValue: filteredInfo.activitycategories,
      activitycategories: ['กิจกรรมเลือก'],
    });
    filtersActivityList('ฟิลเตอร์เป็นกิจกรรมเลือก');
  };

  const setCatFilter2 = () => {
    setFilteredInfo({
      filteredValue: filteredInfo.activitycategories,
      activitycategories: ['กิจกรรมบังคับ'],
    });
    filtersActivityList('ฟิลเตอร์เป็นกิจกรรมบังคับ');
  };

  const setCatFilter3 = () => {
    setFilteredInfo({
      filteredValue: filteredInfo.activitycategories,
      activitycategories: ['กิจกรรมบำเพ็ญประโยชน์'],
    });
    filtersActivityList('ฟิลเตอร์เป็นกิจกรรมบำเพ็ญประโยชน์');
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'รูปภาพกิจกรรม',
      dataIndex: 'activityimage',
      key: 'activityimage',
      render: (_, record) => (
        <img className="w-2/3" src={record.activityimage} />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'ประเภทกิจกรรม',
      dataIndex: 'activitycategories',
      key: 'activitycategories',

      filters: [
        { text: 'กิจกรรมเลือก', value: 'กิจกรรมเลือก' },
        { text: 'กิจกรรมบังคับ', value: 'กิจกรรมบังคับ' },
        { text: 'กิจกรรมบำเพ็ญประโยชน์', value: 'กิจกรรมบำเพ็ญประโยชน์' },
      ],
      render: (activitycategories: string[]) => (
        <span>
          {activitycategories.map((activitycategories) => {
            let color = '';
            if (activitycategories == 'กิจกรรมบังคับ') {
              color = 'red';
            } else if (activitycategories == 'กิจกรรมเลือก') {
              color = 'amber';
            } else {
              color = 'blue';
            }
            return (
              <div
                className={`ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-${color}-200 text-${color}-700 rounded-full`}
              >
                {activitycategories}
              </div>
            );
          })}
        </span>
      ),
      // render: (_, record) => (
      //   <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full">
      //     {record.activitycategories}
      //   </div>
      // ),
      filteredValue: filteredInfo.activitycategories || null,
      onFilter: (value: string, record) =>
        record.activitycategories.includes(value),
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
          <button
            // onClick={handleClick}
            type="button"
            className="font-Kanit inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700"
          >
            ลบ
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
        pagination={{ pageSize: 5 }}
        columns={columns}
        dataSource={data}
        onChange={handleChange}
      />
    </>
  );
};

export default TableCompo;
