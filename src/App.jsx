import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LayoutContainer from './container/layout/LayoutContainer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutContainer/>}>

      </Route>
    </Routes>

  );
}

export default App;
