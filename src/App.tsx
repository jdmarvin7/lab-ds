import { TextInput } from './components/TextInput';
import './styles/global.css';

function App() {

  return (
    <div>
      <h1 className="font-bold text-2xl text-cyan-500 bg-cyan-300">Hello world</h1>
      <TextInput.Input />
    </div>
  )
}

export  { App }; 
