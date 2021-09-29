import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import About from './About/About';
import './App.css';
import FriendDeatail from './FriendDetail/FriendDeatail';
import Friends from './Friends/Friends';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Notfound from './Notfound/Notfound';
import Services from './Services/Services';

function App() {
  return (
    <div className="App">
    
     <Router>
        <Nav></Nav>
        <Switch>
            <Route exact path ="/">
              <Home></Home>
            </Route>
             <Route exact path="/friend/:friendId">
              <FriendDeatail></FriendDeatail>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/services">
                <Services></Services>
            </Route>
            <Route path="/friends">
            <Friends></Friends>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
            
            
        </Switch>
     </Router>
     
    </div>
  );
}

export default App;
