import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import StatefulGreetings from './components/StatefulGreetings';

function App() {
  return (
    <div className="App">
      <StatefulGreetings greeting="I am a stateful class component" />
    </div>
  );
}

export default App;
