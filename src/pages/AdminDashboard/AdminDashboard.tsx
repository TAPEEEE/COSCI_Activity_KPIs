import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import RequestCard from '../../components/RequestCard';

type AdminDashboardProps = {
  //
};

const AdminDashboard: React.FC<any> = () => {
  return (
    <>
      <body className="h-full bg-gray-100">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 font-Kanit">
            <div className="lg:flex lg:justify-between">
              <h1 className="text-[24px] font-medium tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <RequestCard />
        </div>
      </body>
    </>
  );
};

export default AdminDashboard;
