import React from 'react';
import Footer from '../../components/Footer';

type AdminRequestDashboardProps = {
  //
};

const AdminRequestDashboard: React.FC<any> = () => {
  return (
    <>
      <body className="h-full bg-gray-100">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 font-Kanit">
            <div className="lg:flex lg:justify-between">
              <h1 className="text-[28px] font-medium tracking-tight text-gray-900">
                จัดการคำร้อง
              </h1>
              <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <button
                  type="button"
                  className="mr-2 inline-flex items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
                >
                  จัดการคำร้องนิสิต
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2"
                >
                  จัดการคำร้องบุคลากร
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-28">
          <Footer />
        </div>
      </body>
    </>
  );
};

export default AdminRequestDashboard;
