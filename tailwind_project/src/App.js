import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Comments from "./screens/Comments";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/">
          <Homescreen />
        </Route>
      </Switch>
  </Router>  
  )
}

export default App;
