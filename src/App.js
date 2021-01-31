import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BubbleSort from './pages/BubbleSort';
import SelectionSort from './pages/SelectionSort';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bubblesort' component={BubbleSort} />
        <Route path='/selectionsort' component={SelectionSort} />
      </Switch>
    </Router>
  );
}

export default App;
