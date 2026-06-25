import Accordion from './Accordion.jsx';
import data from '../../../utils/data.json';

const AccordionParentContainer = () => {
  return (
    <>
      {data.faqs.map((item, index) => {
        return <Accordion key={index} data={item} />;
      })}
    </>
  );
};

export default AccordionParentContainer;
