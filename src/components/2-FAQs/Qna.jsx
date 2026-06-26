import { useState } from 'react';
import './styles.css';

const Qna = ({ qnaData }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='inner-div'>
      <h3>
        {qnaData?.question}
        <span
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          +
        </span>
      </h3>
      {toggle && <p>{qnaData.answer}</p>}
    </div>
  );
};

export default Qna;
