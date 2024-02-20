import './App.css';
 import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Components/Create';
import BlogList from './Components/BlogList';
import bootstrap from 'bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
       <div class="content">
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route path ="/Create">

            <Create/>
          </Route>
          {/*<Route path="/BlogDetails/:id">
            <BlogDetails />
          </Route>
          
          <Route path="*">
            <NotFound />
            </Route> */}
        </Switch>
       </div>
    </div>
    </Router>
     
      
      
  );
}

export default App;