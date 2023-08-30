import SearchInput from './SearchInput/SearchInput';
import Divider from '../Divider/Divider';
import ChannelsOptions from './ChannelsOptions/ChannelsOptions';
import DirectMessages from './DirectMessages/DirectMessages';

const ChannelsBar = () => {
  return (
    <div className="fixed z-10 top-0 left-16 w-48 p-3 h-screen dark:bg-gray-75 bg-gray-300 transition-all ease-in duration-200">
      <SearchInput />
      <Divider />
      <ChannelsOptions />
      <Divider />
      <DirectMessages />
    </div>
  );
};

export default ChannelsBar;
