import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/home/home';

import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/navbar/navbar';
// this old portfolio

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
    </div>

  );
}

export default App;
