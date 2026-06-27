// import AccordionParentContainer from './components/1-Accordion/AccordionParentContainer.jsx';
// import Faq from './components/2-FAQs/Faq.jsx';
// import data from '../utils/data.json';
import Tabs from './components/3-Tabs/Tabs.jsx';

const tabsData = [
  {
    label: 'Profile',
    content: <div>Profile Info Content</div>,
  },
  {
    label: 'Dashboard',
    content: <div>Dashboard Content</div>,
  },
  {
    label: 'Settings',
    content: <div>Settings Content</div>,
  },
  {
    label: 'Invoice',
    content: <div>Invoice Content</div>,
  },
];

function App() {
  return (
    <>
      <Tabs tabsData={tabsData} />
    </>
  );
}

export default App;
