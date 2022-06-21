import './App.css';
import MemoBoard from './components/MemoBoard';
import MemoForm from './components/MemoForm';

function App() {
  return (
    <div className="App">
      <MemoForm></MemoForm>
      <MemoBoard></MemoBoard>
    </div>
  );
}

export default App;
