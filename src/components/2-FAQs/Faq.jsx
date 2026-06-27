import { useState } from 'react';
import Qna from './Qna.jsx';

const Faq = ({ qnaMainData }) => {
  // -1 : No children should show answer
  // Lift the state up, basically parent will handle all the children
  const [showIndex, setShowIndex] = useState(null);

  const handleQnA = (index) => {
    // If the clicked question is already open (showIndex === index), then close it. Otherwise, open it.
    if (showIndex === index) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <div className='outer-div'>
      {qnaMainData.faqs.map((item, index) => {
        {
          /* if index is 5 and showIndex also 5 , it means , showAns is true and when showAns is true rendeer the answer*/
        }
        return (
          <Qna
            qnaData={item}
            showAns={index === showIndex}
            // For every child React creates a different function. For first child-> () => handleQnA(0) ||| Second --> () => handleQnA(1)
            handleQnA={() => {
              handleQnA(index);
            }}
          />
        );
      })}
    </div>
  );
};
export default Faq;
