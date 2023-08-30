import { friends } from '../../../data/friends';
import { Friend } from '../../../types/Friend';
import Divider from '../../Divider/Divider';
import Chat from './Chat/Chat';

const Friends = () => {
  return (
    <div className="mt-4 custom">
      <p className="dark:text-white text-gray-100 font-bold">Friends</p>
      <div className="w-full dark:bg-gray-25 bg-gray-300 rounded-xl mt-2 p-2 pr-5 overflow-y-scroll h-[300px] snap-y">
        <p className="dark:text-white text-gray-100 text-sm">Online - 4</p>
        <Divider />
        {friends.map(
          ({ name, isAdmin, isActive, spotify, color, index }: Friend) => {
            return (
              <Chat
                key={index}
                name={name}
                isAdmin={isAdmin}
                isActive={isActive}
                spotify={spotify}
                color={color}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Friends;
