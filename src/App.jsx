import './App.css';
import Countdown from './components/countdown';
import Todolist from './components/todolist';


function App() {

  return (
    <div className="App">
      <Todolist/>
      <br/>
      <Countdown/>
    </div>
  );
}

export default App;
