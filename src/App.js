import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path = '/' exact  component = {Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
