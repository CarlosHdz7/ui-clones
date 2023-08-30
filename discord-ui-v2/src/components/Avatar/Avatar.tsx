import { AvatarColors, Spotify } from '../../types/Friend';
import { BsSpotify, BsEmojiLaughing } from 'react-icons/bs';

type AvatarProps = {
  name: string;
  isAdmin?: boolean;
  isActive?: boolean;
  spotify?: Spotify;
  showStatus?: boolean;
  color: AvatarColors;
};

const Avatar = ({
  name,
  spotify,
  isActive = false,
  isAdmin = false,
  showStatus = false,
  color,
}: AvatarProps) => {
  const showStatusContainer = showStatus && spotify?.isActive;

  const colors: {
    red: string;
    gray: string;
    blue: string;
    yellow: string;
    purple: string;
  } = {
    red: 'bg-red-500',
    gray: 'bg-gray-100',
    blue: 'bg-blue-600',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500',
  };

  const AvatarClass = `relative flex items-center justify-center h-10 w-10 rounded-3xl mr-3 ${colors[color]} text-white`;

  return (
    <div className="flex justify-between items-center snap-center">
      {/* avatar */}
      <div className="flex">
        <div className={AvatarClass}>
          <BsEmojiLaughing size={25} />
          {isActive ? (
            <div className="absolute bg-teal-500 h-3 w-3 bottom-0 right-0 z-10 rounded-3xl border border-gray-25" />
          ) : (
            <div className="absolute bg-gray-25 h-3 w-3 bottom-0 right-0 z-10 rounded-3xl border border-gray-100" />
          )}
        </div>
        <div className="flex flex-col justify-center">
          <span
            className={
              isAdmin
                ? 'text-sm text-teal-500 font-bold'
                : 'text-sm text-primary font-bold'
            }
          >
            {name}
          </span>
          {spotify?.isActive ? (
            <span className="text-xs dark:text-gray-400 text-gray-100">
              Listening Spotify
            </span>
          ) : null}
        </div>
      </div>
      {/* status */}
      {showStatusContainer ? (
        <div className="flex items-center justify-center mr-1 text-green-600 bg-gray-100 p-1 rounded h-8 w-8">
          <BsSpotify size={20} />
        </div>
      ) : null}
    </div>
  );
};

export default Avatar;
