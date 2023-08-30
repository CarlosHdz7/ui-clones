import {
  BsFire,
  BsPlus,
  BsFillChatLeftDotsFill,
  BsFillGearFill,
  BsFillHeartFill,
} from 'react-icons/bs';
import SideBarIcon from './SibeBarIcon';

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between w-16 fixed dark:bg-gray-100 bg-white h-screen top-0 left-0 z-50 text-white shadow-lg">
      <div>
        <SideBarIcon icon={<BsFire size={20} />} />
        <SideBarIcon icon={<BsPlus size={30} />} />
        <SideBarIcon icon={<BsFillChatLeftDotsFill size={20} />} />
        <SideBarIcon icon={<BsFillHeartFill size={20} />} />
      </div>
      <div>
        <SideBarIcon icon={<BsFillGearFill size={20} />} />
      </div>
    </div>
  );
};

export default SideBar;
