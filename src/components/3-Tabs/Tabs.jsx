import { useState } from 'react';

const Tabs = ({ tabsData }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <div>
      <div>
        {/* buttons */}
        {tabsData.map((item, index) => {
          return (
            <button
              onClick={() => {
                setCurrentIdx(index);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div>
        {/* content */}
        {tabsData[currentIdx].content}
      </div>
    </div>
  );
};

export default Tabs;
