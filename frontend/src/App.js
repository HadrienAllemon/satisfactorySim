import Menu from './components/Menu';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu/>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
