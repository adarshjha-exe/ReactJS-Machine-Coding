import { useState } from 'react';
import Qna from './Qna.jsx';

const Faq = ({ qnaMainData }) => {
  // -1 : No children should show answer
  // Lift the state up, basically parent will handle all the children
  const [showIndex, setShowIndex] = useState(5);
  return (
    <div className='outer-div'>
      {qnaMainData.faqs.map((item, index) => {
        {
          /* if index is 5 and showIndex also 5 , it means , showAns is true and when showAns is true rendeer the answer*/
        }
        return <Qna qnaData={item} showAns={index === showIndex} />;
      })}
    </div>
  );
};
export default Faq;
