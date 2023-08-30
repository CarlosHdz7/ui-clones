import './App.css';
import ChannelsBar from './components/ChannelsBar/ChannelsBar';
import MainContent from './components/MainContent/MainContent';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <>
      <div>
        <SideBar />
        <ChannelsBar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
