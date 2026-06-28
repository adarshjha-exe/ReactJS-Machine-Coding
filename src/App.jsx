import Rating from './components/4-StarRating/Rating';

function App() {
  const onTabChange = (index) => {
    console.log('Tab changed and index is : ', index);
  };

  return (
    <>
      <Rating />
    </>
  );
}

export default App;
