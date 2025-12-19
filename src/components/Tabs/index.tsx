import React, { useState } from 'react';

type TabProps = {
  label: string;
  children: React.ReactNode;
};

type TabsProps = {
  children: React.ReactElement<TabProps>[]; // Expecting multiple <Tab> components
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  return (
    <div className="w-full max-w-8xl mx-auto p-10 sm:p-6">
      {/* Tab Labels */}
      <div className="flex flex-wrap sm:flex-nowrap sm:justify-center justify-start space-x-16 overflow-x-auto ">
        {children.map((child) => {
          const { label } = child.props;
          const isActive = label === activeTab;

          return (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`px-3 sm:px-6 py-2 font-medium text-sm sm:text-base border-b-4 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'border-orange-500 text-black'
                  : 'border-transparent text-gray-600 hover:text-black'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="mt-4 sm:mt-6 px-10">
        {children.map((child) =>
          child.props.label === activeTab ? (
            <div key={child.props.label} className="text-sm sm:text-base">
              {child.props.children}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
