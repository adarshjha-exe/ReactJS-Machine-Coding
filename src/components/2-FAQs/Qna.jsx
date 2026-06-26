import { useState } from 'react';
import './styles.css';

const Qna = ({ qnaData, showAns }) => {
  return (
    <div className='inner-div'>
      <h3>
        {qnaData?.question}
        <span
          onClick={() => {
            // setToggle(!toggle);
          }}
        >
          +
        </span>
      </h3>
      {showAns && qnaData.answer}
    </div>
  );
};

export default Qna;
