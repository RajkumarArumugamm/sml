import logo from './logo.svg';
import './App.css';
import SMLTextBox from './shared/components/SMLTextBoxWithLabel';
import Login from './modules/Authentication/Login';

function App(props) {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
