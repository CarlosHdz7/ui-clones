import { BsFillChatLeftDotsFill, BsThreeDotsVertical } from 'react-icons/bs';
import Divider from '../../../Divider/Divider';
import Avatar from '../../../Avatar/Avatar';
import { AvatarColors, Spotify } from '../../../../types/Friend';

type ChatProps = {
  name: string;
  status?: string;
  isAdmin: boolean;
  isActive: boolean;
  spotify?: Spotify;
  color: AvatarColors;
};

const Chat = ({ name, isAdmin, isActive, spotify, color }: ChatProps) => {
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <Avatar
          name={name}
          isAdmin={isAdmin}
          isActive={isActive}
          spotify={spotify}
          color={color}
        />
        <div className="flex">
          <ChatButton icon={<BsFillChatLeftDotsFill />} />
          <ChatButton icon={<BsThreeDotsVertical />} />
        </div>
      </div>
      <Divider />
    </>
  );
};

type ChatButtonProps = {
  icon: React.ReactNode;
};

const ChatButton = ({ icon }: ChatButtonProps) => {
  return (
    <div className="h-8 w-8 flex items-center justify-center rounded-3xl dark:bg-gray-100 bg-white dark:text-white text-gray-100 ml-2 cursor-pointer">
      {icon}
    </div>
  );
};

export default Chat;
