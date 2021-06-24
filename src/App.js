import logo from './logo.svg';
import './App.css';
import Parent from './Components/Parent'
// import A from './Components/Context/A'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navabar from './Components/Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import ReactJs from './Components/React'
import Angular from './Components/Angular'
import Python from './Components/Python'
// import A from './Components/ParentToChild/A'
import Parent1 from './Components/ChildtoParent/A'
import AComp from './Components/ContextAPI/A'
import Login from './Components/Forms/Login'
import LCM from './Components/LifeCycleMethods/lifecycle'
import Date1 from './Components/LifeCycleMethods/Date'
import HOCHome from './Components/HOC/Home'


function App() {
  return (
    <div className="App">
     {/* <AComp /> */}
      {/* <Login /> */}
     <BrowserRouter>
     <Navabar />
     <Switch>
       <Route exact path="/" component={LCM } />
       <Route path="/login" component={Login} />
       <Route path="/date" component={Date1} />
       <Route path="/hoc" component={HOCHome} />
      
     </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
