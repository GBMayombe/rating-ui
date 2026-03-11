import Rating from './components/Rating';

const App = () => {
  return (
    <div>
      <Rating
        feedbackMsg={['Hate it', 'Dislike it', 'Meh', 'Good', 'Excellent']}
      />
    </div>
  );
};

export default App;
