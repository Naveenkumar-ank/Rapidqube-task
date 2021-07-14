import { lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

const HomeFunctional = lazy(() => import("./@modules/home/home-functional"));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Switch>
          <Suspense
            fallback={
              <div>
                <div className="pageLoader">Loading...</div>
              </div>
            }
          >
            <Route path="/home" component={HomeFunctional} />
            <Redirect from="" to="/home" />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
