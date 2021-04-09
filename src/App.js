import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BubbleSort from './pages/BubbleSort';
import SelectionSort from './pages/SelectionSort';
import InsertionSort from './pages/InsertionSort';
import QuickSort from './pages/QuickSort';
import MergeSort from './pages/MergeSort';
import HeapSort from './pages/HeapSort';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bubblesort' component={BubbleSort} />
        <Route path='/selectionsort' component={SelectionSort} />
        <Route path='/insertionsort' component={InsertionSort} />
        <Route path='/quicksort' component={QuickSort} />
        <Route path='/mergesort' component={MergeSort} />
        <Route path='/heapsort' component={HeapSort} />
      </Switch>
    </Router>
  );
}

export default App;
