import Qna from './Qna.jsx';

const Faq = ({ qnaMainData }) => {
  return (
    <div className='outer-div'>
      {qnaMainData.faqs.map((item) => {
        return <Qna qnaData={item} />;
      })}
    </div>
  );
};
export default Faq;
