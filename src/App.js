import React from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
import Loadable from "react-loadable";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop:50,
    marginLeft:50
    
  };
  const LoadableAbout = Loadable({
    loader: () => import('../src/components/About.jsx'),
    loading() {
        return <h1>Loading split out code</h1>
    }
  });
  const LoadableTable = Loadable({
    loader: () => import('../src/components/Table.jsx'),
    loading() {
        return <h1>Loading split out code</h1>
    }
  });
  const LoadableHome = Loadable({
    loader: () => import('../src/components/Home.jsx'),
    loading() {
        return <h1>Loading split out code</h1>
    }
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
          </Router>
      );
    }
  }
export default App;