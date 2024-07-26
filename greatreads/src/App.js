//import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {About} from './pages/about';
import {Layout} from './layout/layout';
import {Add} from './pages/addBook';
import {Update} from './pages/addReview';
import {Retrieve} from './pages/findBook';
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
          <Route path = "addBook" element = {<Add />} />
          <Route path = "addReview" element = {<Update />} />
          <Route path = "findBook" element = {<Retrieve />} />
          <Route path = "delete" element = {<Delete />} />
          </Route>
        </Routes>
        </BrowserRouter>
        
      
    //</div>
  );
}

export default App;
