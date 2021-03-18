import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import  AddRecipe from './components/AddRecipe';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         
          <Route   component={AddRecipe} />
          
        </Switch>
      </Router>
    </div>
  );
}
export default App;