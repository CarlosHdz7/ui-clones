import { BsPlus } from 'react-icons/bs';

const BookmarkedTabs = () => {
  return (
    <div className="mt-4">
      <p className="dark:text-white text-gray-100 font-bold">Bookmarked Tabs</p>
      <div className="w-full dark:bg-gray-25 bg-gray-300 h-14 rounded-xl mt-2 flex items-center justify-start p-2">
        <div className="bg-gray-100 h-8 w-8 rounded-md mr-3  cursor-pointer" />
        <div className="bg-gray-100 h-8 w-8 rounded-md mr-3  cursor-pointer" />
        <div className="bg-gray-100 h-8 w-8 rounded-md mr-3  cursor-pointer" />
        <div className="h-8 w-8 rounded-md mr-3 flex items-center justify-center text-white border-2 border-dashed  cursor-pointer">
          <BsPlus size={20} />
        </div>
      </div>
    </div>
  );
};

export default BookmarkedTabs;
