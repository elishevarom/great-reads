//import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Layout} from './layout/layout';
import {Add} from './pages/add';
import {Update} from './pages/update';
import {Retrieve} from './pages/retrieve';
import {Delete} from './pages/delete';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    //<div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Layout />}>
          <Route index element = {<Home />} />
          <Route path = "about" element = {<About />} />
          <Route path = "add" element = {<Add />} />
          <Route path = "update" element = {<Update />} />
          <Route path = "retrieve" element = {<Retrieve />} />
          <Route path = "delete" element = {<Delete />} />
          </Route>
        </Routes>
        </BrowserRouter>
        
      
    //</div>
  );
}

export default App;
