import './App.css';
import Slide from './components/Slide';
import { SliderData } from './components/SliderData';

function App() {
  return <Slide slides={SliderData} />;
}

export default App;