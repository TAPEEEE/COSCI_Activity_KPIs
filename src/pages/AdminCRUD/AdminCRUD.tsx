import * as React from 'react';

type AdminCRUDProps = {
  //
};

const AdminCRUD: React.FC<any> = () => {
  return (
    <body className="h-full bg-gray-100">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 font-Kanit">
          <div className="lg:flex lg:justify-between">
            <h1 className="text-[24px] font-medium tracking-tight text-gray-900">
              จัดการคำร้อง
            </h1>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
              >
                เพิ่มกิจกรรม
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl tracking-tight text-gray-900"></h1>
        </div>
      </div>
    </body>
  );
};

export default AdminCRUD;
