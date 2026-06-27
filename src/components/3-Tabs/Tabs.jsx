import { useState } from 'react';
import './tabs.css';

const Tabs = ({ tabsData, onTabChange }) => {
  //   console.log(onTabChange);
  const [currentIdx, setCurrentIdx] = useState(0);
  return (
    <div>
      <div>
        {/* buttons */}
        {tabsData.map((item, index) => {
          return (
            <button
              className={`${index === currentIdx ? 'active' : ''}`}
              onClick={() => {
                setCurrentIdx(index);
                onTabChange(index);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className='tabs__content'>
        {/* content */}
        {tabsData[currentIdx].content}
      </div>
    </div>
  );
};

export default Tabs;
