import { useState } from 'react';
import './styles.css';

const Qna = ({ qnaData, showAns, handleQnA }) => {
  return (
    <div className='inner-div'>
      <h3>
        {qnaData?.question}
        <span onClick={handleQnA}>{showAns ? '-' : '+'}</span>
      </h3>
      <hr />
      {showAns && qnaData.answer}
    </div>
  );
};

export default Qna;

/**
The parent owns the state (showIndex). Each child receives two props: showAns (to decide whether to display its answer) and handleQnA (a callback to notify the parent when it's clicked). Clicking a child updates the parent's state, React re-renders, and only the child whose index matches showIndex displays its answer. Clicking the same child again sets showIndex back to null, collapsing it.
*/
