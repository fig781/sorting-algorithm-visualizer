import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BubbleSort from './pages/BubbleSort';
import SelectionSort from './pages/SelectionSort';
import InsertionSort from './pages/InsertionSort';
import QuickSort from './pages/QuickSort';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bubblesort' component={BubbleSort} />
        <Route path='/selectionsort' component={SelectionSort} />
        <Route path='/insertionsort' component={InsertionSort} />
        <Route path='/quicksort' component={QuickSort} />
      </Switch>
    </Router>
  );
}

export default App;
