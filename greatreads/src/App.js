import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Layout} from './layout/layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Layout />}>
          <Route index element = {<Home />} />
          <Route path = "about" element = {<About />} />
          </Route>
        </Routes>
        </BrowserRouter>
        
      
    </div>
  );
}

export default App;
