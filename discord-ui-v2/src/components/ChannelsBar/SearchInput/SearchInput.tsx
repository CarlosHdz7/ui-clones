import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <div className="flex items-center justify-start dark:bg-gray-100 bg-white px-2 h-8 rounded-md dark:text-gray-500 text-gray-100">
      <input
        className="w-full font-sans font-semibold bg-transparent outline-none dark:text-gray-500 text-gray-100 placeholder-gray-100 dark:placeholder-gray-500 rounded transition duration-300 ease-in-out"
        type="text"
        placeholder="Search..."
      />
      <BsSearch size={18} />
    </div>
  );
};

export default SearchInput;
