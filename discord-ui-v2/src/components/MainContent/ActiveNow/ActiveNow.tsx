import { friends } from '../../../data/friends';
import { Friend } from '../../../types/Friend';
import Avatar from '../../Avatar/Avatar';

const ActiveNow = () => {
  return (
    <div className="fixed top-[56px] right-0 dark:bg-gray-100 bg-white w-72 h-full p-3 z-5 transition-all ease-in duration-200">
      <span className="dark:text-white text-gray-100 font-bold">
        Active now
      </span>
      <div className="p-3 flex flex-col gap-y-3">
        {friends
          .filter(({ isActive }: Friend) => isActive === true)
          .map(({ name, isActive, spotify, color, isAdmin, index }: Friend) => (
            <div
              className="w-full dark:bg-gray-25 bg-gray-300 h-auto p-2 rounded-md"
              key={index}
            >
              <Avatar
                name={name}
                isActive={isActive}
                spotify={spotify}
                showStatus={spotify?.isActive}
                color={color}
                isAdmin={isAdmin}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ActiveNow;
