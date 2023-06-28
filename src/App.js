import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Salut from './components/Salut';
import Salam from './components/Salam';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Hello />
      <Salut />
      <Salam />
      <Message />
    </div>
  );
}

export default App;
