import { useState } from 'react';
import './styles.css';

const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='accordion'>
      <h3>
        {/* Questions  */}
        {data.question}

        {/* Button */}
        <button
          onClick={() => {
            setIsOpen(!toggle);
          }}
        >
          {isOpen ? '-' : '+'}
        </button>

        {/* Answer visibility */}
      </h3>
      {isOpen ? <p>{data.answer}</p> : ''}
    </div>
  );
};

export default Accordion;
