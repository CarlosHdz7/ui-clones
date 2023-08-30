type SideBarProps = {
  icon: React.ReactNode;
  text?: string;
};

const SideBarIcon = ({ icon, text = 'tooltip' }: SideBarProps) => {
  return (
    <div className="relative z-50 flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto dark:text-teal-500 text-primary hover:text-white dark:bg-gray-50 bg-gray-300 rounded-3xl hover:rounded-xl transition-all ease-in duration-300 cursor-pointer group">
      {icon}

      <span className="absolute  w-auto p-2 m-2 min-w-max left-14 bg-gray-25 rounded-md shadow-md font-bold text-white text-xs transition-all duration-100 scale-0 origin-left group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};

export default SideBarIcon;
