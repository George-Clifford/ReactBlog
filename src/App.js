import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogForm from './Components/BlogForm';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
   <Router>
    <div className="App">
      <Navbar />
      {/* <BlogForm /> */}
      {/* <YourExistingBlogComponent/> */}
    
        <div className='content'>
          <Switch>
            <Route exact path ="/">
              <Home/>
            </Route>
            <Route path ="/BlogForm">
              <BlogForm/>
            </Route>
            <Route path="/Blog-details/:id">
              <BlogDetails/>
            </Route>
            </Switch>
      </div>
      </div>
      </Router>
  );
}

export default App;
