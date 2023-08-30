import React from 'react';
import {
  BsFillHouseDoorFill,
  BsEmojiLaughingFill,
  BsSoundwave,
  BsController,
  BsFillRocketTakeoffFill,
} from 'react-icons/bs';

const ChannelsOptions = () => {
  return (
    <div className="dark:text-gray-500 text-gray-100 flex flex-col text-sm">
      <Option text="Home" icon={<BsFillHouseDoorFill />} isActive />
      <Option text="Friends" icon={<BsEmojiLaughingFill />} />
      <Option text="Stage Discovery" icon={<BsSoundwave />} />
      <Option text="Game Library" icon={<BsController />} />
      <Option text="Nitro" icon={<BsFillRocketTakeoffFill />} />
    </div>
  );
};

type OptionProps = {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
};

const Option = ({ icon, text, isActive = false }: OptionProps) => {
  const OptionClass = `flex items-center my-1 hover:bg-gray-500  p-1 hover:text-white rounded transition ease-in duration-200 cursor-pointer ${
    isActive ? 'bg-gray-500 text-white' : ''
  }`;

  return (
    <div className={OptionClass}>
      <span className="mr-2 flex items-center justify-center">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default ChannelsOptions;
