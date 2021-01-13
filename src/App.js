import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from "react-loadable";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop:50,
    marginLeft:50
    
  };

  const Loader = (props) => {
	if (props.error) {
		return <div>Oh no, something went wrong!</div>;
	} else if (props.delay) {
		return <h2>Loading...</h2>
	} else {
		return null;
	}
}
  const LoadableAbout = Loadable({
    loader: () => import('../src/components/About.jsx'),
    loading:Loader
  });
  const LoadableTable = Loadable({
    loader: () => import('../src/components/Table.jsx'),
    loading:Loader
  });
  const LoadableHome = Loadable({
    loader: () => import('../src/components/Home.jsx'),
    loading:Loader
  });
  const LoadableFetch = Loadable({
    loader: () => import('../src/components/FetchExample.jsx'),
    loading:Loader
  });
class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <LoadableHome/>
                </Route>
                <Route exact path="/about">
                    <LoadableAbout/>
                </Route>
                <Route exact path="/info">
                    <LoadableTable/>
                </Route>
                <Route exact path="/fetch">
                    <LoadableFetch/>
                </Route>
          </Router>
      );
    }
  }
export default App;