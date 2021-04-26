import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import BubbleSort from './pages/BubbleSort';
import SelectionSort from './pages/SelectionSort';
import InsertionSort from './pages/InsertionSort';
import QuickSort from './pages/QuickSort';
import ShellSort from './pages/ShellSort';
import HeapSort from './pages/HeapSort';

function App() {
  return (
    //basename exists for gitHub pages since the build is stored in /sorting-algorithm-visualzer
    <BrowserRouter basename='/sorting-algorithm-visualizer'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bubblesort' component={BubbleSort} />
        <Route path='/selectionsort' component={SelectionSort} />
        <Route path='/insertionsort' component={InsertionSort} />
        <Route path='/quicksort' component={QuickSort} />
        <Route path='/shellsort' component={ShellSort} />
        <Route path='/heapsort' component={HeapSort} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
