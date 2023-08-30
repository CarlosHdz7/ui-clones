import { BsDiscord, BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import useDarkMode from '../../../hooks/useDarkMode';

const Navbar = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <div className="fixed w-[calc(100%-256px)] h-14 pt-4 pb-4 shadow-md dark:bg-gray-50 bg-gray-200 p-2 pl-5 flex items-center justify-between border-b-2 dark:border-gray-100 border-tranparent z-10 transition-all ease-in duration-200">
      <div className="flex items-center justify-center dark:text-white text-gray-100 cursor-pointer">
        <BsDiscord size={22} />
        <span className="font-bold dark:text-white text-gray-100 text-lg ml-2">
          Discord
        </span>
      </div>
      <div
        className="dark:text-white text-gray-100 pr-6 cursor-pointer"
        onClick={handleMode}
      >
        {darkTheme ? (
          <BsFillSunFill size={22} />
        ) : (
          <BsFillMoonStarsFill size={22} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
