// import AccordionParentContainer from './components/1-Accordion/AccordionParentContainer.jsx';
import Faq from './components/2-FAQs/Faq.jsx';
import data from '../utils/data.json';

function App() {
  return (
    <>
      <Faq qnaMainData={data} />
    </>
  );
}

export default App;
