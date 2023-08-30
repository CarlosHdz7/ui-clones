import banner from '../../../assets/banner.png';

const Banner = () => {
  return (
    <div className="w-full h-40 bg-primary rounded-xl p-5 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-white text-5xl tracking-tighter">
          Introducing Tabs
        </span>
        <span className="text-white pt-2">
          View, interact and manage chat channels using tabs
        </span>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;
