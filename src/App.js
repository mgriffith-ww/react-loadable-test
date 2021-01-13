import React from 'react';
import { BrowserRouter as Router, Route , Link} from 'react-router-dom';
import Loadable from "react-loadable";
import "./index.css"


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
class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <section style={styles}>
                        <button><Link to="/about">About Us</Link></button>
                    </section>
                </Route>
                <Route exact path="/about">
                    <LoadableAbout/>
                </Route>
          </Router>
      );
    }
  }
export default App;