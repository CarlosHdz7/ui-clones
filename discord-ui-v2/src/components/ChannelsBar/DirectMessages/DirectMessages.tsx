import { friends } from '../../../data/friends';
import { Friend } from '../../../types/Friend';
import Avatar from '../../Avatar/Avatar';

const DirectMessages = () => {
  return (
    <div>
      <h4 className="text-gray-500 text-sm font-bold mb-3">Direct Messages</h4>
      <div className="flex flex-col gap-y-3 overflow-y-scroll h-96">
        {friends.map(({ index, name, isAdmin, isActive, color }: Friend) => (
          <Avatar
            key={index}
            name={name}
            isAdmin={isAdmin}
            isActive={isActive}
            color={color}
          />
        ))}
      </div>
    </div>
  );
};

export default DirectMessages;
