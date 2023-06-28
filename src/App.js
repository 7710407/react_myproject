import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Salut from './components/Salut';
import Salam from './components/Salam';
import Message from './components/Message';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Hello />
      <Salut />
      <Salam />
      <Message messagecode="10" messagecontent="This is a message from props"/>
      <Profile name="Susana" lastname="Budaghyan" />
      <Profile name="Armen" lastname="Gagikyan"> 
        <h3>This is a profile of a person</h3>
      </Profile>
    </div>
  );
}

export default App;
