import Navbar from './Navbar/Navbar';
import Banner from './Banner';
import BookmarkedTabs from './BookmarkedTabs/BookmarkedTabs';
import Friends from './Friends/Friends';
import ActiveNow from './ActiveNow/ActiveNow';

const MainContent = () => {
  return (
    <div className="pl-[256px] dark:bg-gray-50 bg-gray-200 transition-all ease-in duration-200">
      <Navbar />
      <div className="p-5 pt-20 w-[calc(100%-288px)]">
        <Banner />
        <BookmarkedTabs />
        <Friends />
      </div>
      <ActiveNow />
    </div>
  );
};

export default MainContent;
